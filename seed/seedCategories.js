const slugify = require("slugify");
const Category = require("../models/Category");
const categoriesToSeed = require("./categoriesData");

const seedCategories = async () => {
  const categoryMap = {}; // slug -> _id

  for (const cat of categoriesToSeed) {
    // ✅ USE cat.slug EXACTLY
    const slug = cat.slug;

    const category = await Category.findOneAndUpdate(
      { slug },
      {
        $set: {
          title: cat.title,
          slug,
          image: cat.image,
          desc: cat.desc,
          type: cat.type,
          rank: Number(cat.rank) || 999,
        },
      },
      { upsert: true, new: true }
    );

    categoryMap[slug] = category._id;
  }

  console.log("Categories seeded/upserted");
  return categoryMap;
};

module.exports = seedCategories;
