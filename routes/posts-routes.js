// Imports from thrid party libraries
const express = require("express");

// Import controller
const postsController = require("../controllers/posts-controller.js");

const router = express.Router();

router.get("/", postsController.getAllPosts);
router.post("/", postsController.createPost);

module.exports = router;
