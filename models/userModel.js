const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "A account must have a user name"],
      trim: true,
      default: "Bob",
    },
    userProfilePic: {
      type: String,
      required: [false, "A account must have a user profile picture"],
      default: "",
    },
    userPostedIDs: [
      {
        postID: {
          type: String,
        },
        postedIDNumber: {
          type: String,
        },
      },
    ],
    userSavedIDs: [
      {
        postID: {
          type: String,
        },
      },
    ],
    AccountCreatedAt: {
      type: Date,
      default: Date.now(),
    },
    userDescription: {
      type: String,
      required: [true, "A account must have a description"],
      trim: true,
      default: "N/A",
    },
    email: {
      type: String,
      required: [true, "A account must have a Gmail"],
      trim: true,
      default: "Scam@gmail.com",
    },
    following: [
      {
        userID: {
          type: Number,
          required: [false, "User ID?"],
        },
      },
    ],
    totalFollowing: {
      type: Number,
      default: 0,
    },
    followers: [
      {
        userID: {
          type: Number,
          required: [false, "User ID?"],
        },
      },
    ],
    totalFollowers: {
      type: Number,
      default: 0,
    },
    userSettings: {},
  },
  {
    collection: "users",
  }
);
const User = mongoose.model("Users", userSchema);

module.exports = User;
