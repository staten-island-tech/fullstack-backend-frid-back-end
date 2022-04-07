const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "A account must have a user name"],
    trim: true,
  },
  AccountCreatedAt: {
    type: Date,
    default: Date.now(),
  },
  email: {
    type: String,
    required: [true, "A account must have an email"],
    trim: true,
    lowercase: true,
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
});
const User = mongoose.model("Users", userSchema);

module.exports = User;
