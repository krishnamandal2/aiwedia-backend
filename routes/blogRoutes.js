const express = require("express");
const Blog = require("../models/Blog");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

/**
 * CREATE BLOG (ADMIN)
 */
router.post("/", isAdmin, async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * GET ALL BLOGS (ADMIN)
 */
router.get("/", isAdmin, async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

/**
 * GET BLOG BY ID (ADMIN)
 */
router.get("/admin/:id", isAdmin, async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Not found" });
  res.json(blog);
});

/**
 * UPDATE BLOG
 */
router.put("/:id", isAdmin, async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(blog);
});

/**
 * DELETE BLOG
 */
router.delete("/:id", isAdmin, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

/**
 * PUBLIC BLOG BY SLUG
 */
// Get all published blogs
router.get("/public", async (req, res) => {
  try {
    const blogs = await Blog.find(
      { status: "published" },
      "-_id -__v -status"
    ).sort({ createdAt: -1 });

    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get single blog by slug
router.get("/public/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne(
      { slug: req.params.slug, status: "published" },
      "-_id -__v -status"
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;
