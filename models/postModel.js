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
  userName: {
    type: String,
    required: [false, "Who posted this??"],
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
        type: String,
        required: [true, "The song must have length"],
        default: "0",
        trim: true,
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
  comments:[
    {
      commentNumber: {
        type: Number,
        default: 0,
        required: [true, "how much comments?"],
      },
      commentContent: {
        type: String,
        default: "type comment here",
      },
      commentLikes: {
        type: Number,
        default: 0,
      },
      commentDisLikes: {
        type: Number,
        default: 0,
      },
      commentUserName: {
        type: String,
        default: "True_Busty_Bird_Fan",
        required: [false, "Who posted?"],
      },
      userID: {
        type: Number,
        required: [false, "User ID?"],
      },
    },
  ],
  totalComments: {
    type: Number,
    default: 0,
  },
});
const Post = mongoose.model("Posts", postSchema);

module.exports = Post;
