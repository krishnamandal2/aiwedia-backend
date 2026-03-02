const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    url: String,
    image: String,
    rank: Number,
    description: String,
    benefits: [String],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ allow same slug in different categories
ToolSchema.index({ slug: 1, category: 1 }, { unique: true });


ToolSchema.index({ name: "text", slug: "text" });


module.exports = mongoose.model("Tool", ToolSchema);
