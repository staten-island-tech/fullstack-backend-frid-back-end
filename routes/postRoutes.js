const postCon = require("../controllers/postController");
const express = require("express");
const { auth } = require("express-openid-connect");

const router = express.Router();

router.route('/:id').get(postCon.getPost)

router.route('/:id').patch(postCon.updatePost).delete(postCon.deletePost);

router.route("/").get(postCon.getAllPosts);

router.post("/create", postCon.createPost);

router.delete("/:id", postCon.deletePost);

module.exports = router;
