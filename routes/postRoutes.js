const express = require("express");

const router = express.Router();

router.route('/:id').get(getPost);

router.route('/').get(getAllPosts).post(createPost);

module.exports = router;