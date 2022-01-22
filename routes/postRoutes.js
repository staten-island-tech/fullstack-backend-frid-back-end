const express = require("express");
const postCon = require("../controllers/postController");

const router = express.Router();

router.route('/:id').get(postCon.getPost);

router.route('/').get(postCon.getAllPosts).post(postCon.createPost);

module.exports = router;