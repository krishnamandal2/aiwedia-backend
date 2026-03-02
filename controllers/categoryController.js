const Category = require('../models/Category');



const getCategories = async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.max(parseInt(req.query.limit) || 12, 1);
    const skip = (page - 1) * limit;

    const [categories, total] = await Promise.all([
      Category.find({})  
         .select("-_id title slug image desc type rank")    
        .sort({ rank: 1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Category.countDocuments(),
    ]);

    res.json({
      categories,
      page,
      limit,
      total,
      hasMore: skip + categories.length < total,
    });
  } catch (error) {
    console.error("❌ getCategories error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getCategories };