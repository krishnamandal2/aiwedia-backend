const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // needed for upsert
  image: { type: String }, // URL for the icon
  desc: { type: String },
  type: { type: String }, // e.g., "tools", "news"
  url: { type: String },  // optional: used by scraper
  buttonText:{type:String},
  rank: {
    type: Number,   // ✅ MUST be Number
    
  }
},
 { timestamps: true }
);

categorySchema.index({ title: "text", slug: "text" });

// Avoid OverwriteModelError
module.exports = mongoose.models.Category || mongoose.model('Category', categorySchema);
