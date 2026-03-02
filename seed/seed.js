// seed.js
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const mongoose = require("mongoose");
const slugify = require("slugify");

const Tool = require("../models/Tool");
const categoriesToSeed = require("./categoriesData");
const seedCategories = require("./seedCategories");

const toolDataset = require("../data/dataset");
const scrapeToolsFromPage = require("./scraper");

const seedAll = async () => {
  try {
    // 1️⃣ Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // 2️⃣ Seed categories
    const categoryMap = await seedCategories();
    console.log("✅ Categories seeded / updated");

    // 3️⃣ Combine all tool data
    const allToolsData = toolDataset.flat();

    // 4️⃣ Seed tools in batches
    const batchSize = 500;

    for (let i = 0; i < allToolsData.length; i += batchSize) {
      const batch = allToolsData.slice(i, i + batchSize);

      const batchOps = batch
        .map((t) => {
          // 🔒 Validation
          if (!t.title || typeof t.title !== "string") {
            console.warn("❌ Invalid title, skipped:", t);
            return null;
          }

          if (!t.categorySlug) {
            console.warn("❌ Missing categorySlug for:", t.title);
            return null;
          }

          const categoryId = categoryMap[t.categorySlug];
          if (!categoryId) {
            console.warn("❌ Category not found:", t.categorySlug);
            return null;
          }

          // 🧠 Normalize fields
          const title = t.title.trim();
          const slug = t.slug
            ? t.slug
            : slugify(title, { lower: true, strict: true });

          return {
            updateOne: {
              filter: { slug, category: categoryId },
              update: {
                $set: {
                  title, // ✅ FIXED (was name)
                  slug,
                  url: t.url || "",
                  image: t.image || "",
                  rank: t.rank || 0,
                  description: t.description || "",
                  benefits: t.benefits || [],
                  category: categoryId,
                },
              },
              upsert: true,
            },
          };
        })
        .filter(Boolean);

      if (batchOps.length) {
        await Tool.bulkWrite(batchOps);
        console.log(`✅ Tools batch ${i / batchSize + 1} seeded`);
      }
    }

    console.log("✅ All tools dataset seeded");

    // 5️⃣ Optional scraping
    for (const cat of categoriesToSeed) {
      if (!cat.url) continue;

      console.log(`🌐 Scraping tools for ${cat.title}...`);
      const toolsScraped = await scrapeToolsFromPage(cat.url);

      const catId = categoryMap[cat.slug];
      if (!catId) continue;

      const scrapeOps = toolsScraped
        .filter((t) => t.name)
        .map((t) => {
          const toolSlug = slugify(t.name, {
            lower: true,
            strict: true,
          });

          return {
            updateOne: {
              filter: { slug: toolSlug, category: catId },
              update: {
                $set: {
                  title: t.name, // ✅ FIXED
                  slug: toolSlug,
                  url: t.url || "",
                  description: t.description || "",
                  category: catId,
                },
              },
              upsert: true,
            },
          };
        });

      if (scrapeOps.length) {
        await Tool.bulkWrite(scrapeOps);
        console.log(`✅ ${scrapeOps.length} scraped tools saved for ${cat.title}`);
      }
    }

    console.log("🎉 SEEDING COMPLETED SUCCESSFULLY");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seedAll();
