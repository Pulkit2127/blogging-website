const express = require("express");
const { Blog } = require("../db");
const { authMiddleware } = require("../middleware");

const blogRouter = express.Router();

blogRouter.post("/", authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const userId = req.userId;
  const blog = await Blog.create({
    userId,
    title,
    content,
  });
  res.json({
    message: "Created Successfully",
    blog,
  });
});

blogRouter.get("/bulk", authMiddleware, async (req, res) => {
  try {
    const blogs = await Blog.find({})
      .populate({
        path: "userId",
        select: "_id fullname username",
      })
      .select("_id title content createdAt updatedAt ");

    const transformedBlogs = blogs.map((blog) => ({
      _id: blog._id,
      title: blog.title,
      content: blog.content,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt,
      author: blog.userId,
    }));

    res.json(transformedBlogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = blogRouter;
