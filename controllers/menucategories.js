const Category = require('../models/Category');

const getMenuCategories  = async (req, res) => {
  try {
    const categories = await Category.find({})
      .select("slug title type rank -_id") 
      .sort({ rank: 1 })                   
      .lean();                             

    res.set("Cache-Control", "public, max-age=600"); 

    res.json({
      success: true,
      count: categories.length,
      categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load menu categories"
    });
  }
};

module.exports = getMenuCategories;