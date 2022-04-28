const postCon = require("../controllers/postController");
const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");

const router = express.Router();

router.route('/:id').get(postCon.getPost).patch(requiresAuth(), postCon.updatePost).delete(requiresAuth(), postCon.deletePost);

router.route("/").get(postCon.getAllPosts);

router.post('/create', requiresAuth(), postCon.createPost);

router.delete("/:id", postCon.deletePost);

module.exports = router;
