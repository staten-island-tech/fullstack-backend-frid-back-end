const userCon = require("../controllers/userController");
const express = require("express");
const Spotify = require("../test");

const router = express.Router();

// router.param('id', userCon.checkID);

router.route("/spotifyToken").get(Spotify.setToken);

router.route("/getArtist").get(Spotify.getArtists);

router.route("/searchTracks").patch(Spotify.search);

router
  .route("/:id")
  .get(userCon.getUser)
  .patch(userCon.updateUser)
  .delete(userCon.deleteUser);

router.route("/").get(userCon.getAllUsers);

router.post("/create", userCon.createUser);

module.exports = router;
