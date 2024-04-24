const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likepost,
} = require("../controllers/posts");

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likepost);

module.exports = router;
