const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    summary: { type: String, required: true },
    image: { type: String },
    fullImage: { type: String },
    date: { type: String, required: true },
    status: { type: String, default: "draft" },

    // store HTML from editor
    content: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);