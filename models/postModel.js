const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  postName: {
    type: String,
    required: [true, "A post must have a title"],
    trim: true,
    default: "N/A",
  },
  songAmount: {
    type: Number,
    required: [true, "No empty playlists Permitted"],
    default: 0,
  },
  songs: [
    {
      songName: {
        type: String,
        required: [true, "A song must have a name"],
        default: "N/A",
        trim: true,
      },
      songNumber: {
        type: Number,
        required: [true, "Songs must have an order"],
        default: 1,
      },
      artist: {
        type: String,
      },
      duration: {
        type: Number,
        required: [true, "The song must have length"],
        default: 0,
      },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  totalLikes: {
    type: Number,
    default: 0,
  },
  totalDislikes: {
    type: Number,
    default: 0,
  },
  comments: {
    totalComments: {
      type: Number,
      default: 0,
    },
    comment1: {
      commentContent: {
        type: String,
        default: "type comment here",
      },
      commentLikes: {
        type: Number,
        default: 0,
      },
      userID: {
        type: Number,
        required: [true, "User ID?"],
      },
    },
  },
});
const Post = mongoose.model("Posts", postSchema);

module.exports = Post;
