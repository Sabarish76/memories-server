const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");
const { ObjectId } = mongoose.Types;

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!ObjectId.isValid(_id)) return res.status(404).send("No Post With Id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!ObjectId.isValid(_id)) return res.status(404).send("No Post With Id");

  await PostMessage.findByIdAndDelete(_id);

  res.json({ message: "Post Deleted Successfully" });
};

const likepost = async (req, res) => {
  const { id: _id } = req.params;

  if (!ObjectId.isValid(_id)) return res.status(404).send("No Post With Id");

  const post = await PostMessage.findById(_id);

  const updatedpost = await PostMessage.findByIdAndUpdate(
    _id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );

  res.json(updatedpost);
};

module.exports = { getPosts, createPosts, updatePost, deletePost, likepost };
