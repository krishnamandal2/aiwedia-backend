const Tool = require("../models/Tool");
const Category = require("../models/Category");

const getToolsData = async (req, res) => {
  try {
    const { slug } = req.params;

    // 1️⃣ Find category by slug
    const category = await Category.findOne({ slug })
      .select("_id slug")
      .lean();

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // 2️⃣ Fetch tools sorted by rank (ASC: 1 → top)
    const tools = await Tool.find({ category: category._id })
      .select("title slug url image rank description benefits -_id")
      .sort({ rank: 1 }) // ✅ SORT HERE
      .lean();

    // 3️⃣ Attach categorySlug (frontend-friendly)
    const response = tools.map(tool => ({
      ...tool,
      categorySlug: category.slug,
    }));

    res.status(200).json({
      total: response.length,
      tools: response,
    });
  } catch (error) {
    console.error("❌ Tools fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getToolsData;
