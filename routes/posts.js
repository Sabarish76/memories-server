const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
} = require("../controllers/posts");

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
