const postCon = require("../controllers/postController");
const express = require("express");

const router = express.Router();

router
  .route("/:id")
  .get(postCon.getPost)
  .patch(postCon.updatePost)
  .delete(postCon.deletePost);

router.route("/").get(postCon.getAllPosts);

router.post("/create", postCon.createPost);

module.exports = router;
