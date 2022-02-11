const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  postName: {
    type: String,
    required: [true, "A post must have a title"],
    trim: true,
  },
  songAmount: {
    type: Number, 
    required: [true, "No empty playlists Permitted"],  
  },
  song1: {
    songName: {
      type: String,
      required: [true, "A song must have a name"],
      // trim: true,
    },
    artist: {
      type: String,
    },
    duration: {
      type: Number,
      required: [true, "The song must be more tha 0 seconds"],
      default: 0,
    },
  },
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
    }
  },
});
const Post = mongoose.model("Posts", postSchema);

module.exports = Post;
