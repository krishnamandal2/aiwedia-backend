const express = require("express");
const router = express.Router();

const Tool = require("../models/Tool");
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim().length < 2) {
      return res.json([]);
    }

    const regex = new RegExp(q, "i");

    // 🔍 Search tools
    const tools = await Tool.find(
      { $or: [{ title: regex }, { slug: regex }] },
      "title slug category" // ✅ only required fields
    )
      .populate("category", "title slug -_id") // ✅ hide category _id
      .limit(10)
      .lean();

    // 🔍 Search categories
    const categories = await Category.find(
      { $or: [{ title: regex }, { slug: regex }] },
      "title slug"
    )
      .limit(5)
      .lean();

    // 🎯 Normalized response (NO _id)
    const results = [
      ...tools.map(tool => ({
        type: "tool",
        title: tool.title, // ✅ FIXED
        slug: tool.slug,
        categorySlug: tool.category?.slug,
        categoryTitle: tool.category?.title,
      })),
      ...categories.map(cat => ({
        type: "category",
        title: cat.title,
        slug: cat.slug,
      })),
    ];

    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json([]);
  }
});

module.exports = router;
