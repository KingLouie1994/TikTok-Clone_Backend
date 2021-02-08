// Import model
const Post = require("../models/post");

const getAllPosts = async (req, res, next) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    res.status(500).send("Receiving all posts failes, try again!");
  }
  res.status(200).send(posts);
};

const createPost = async (req, res, next) => {
  const createdPost = new Post({
    url: req.body.url,
    channel: req.body.channel,
    sound: req.body.sound,
    likes: req.body.likes,
    messages: req.body.messages,
    description: req.body.description,
    shares: req.body.shares,
  });

  try {
    await createdPost.save();
    res.status(201).send("Post successfull created!");
  } catch (err) {
    res.status(500).send("Creating Post failed, try again!");
  }
};

exports.getAllPosts = getAllPosts;
exports.createPost = createPost;
