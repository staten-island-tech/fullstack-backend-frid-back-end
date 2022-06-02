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
    validate: [validator.isEmail, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    minLength: 8,
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
      userName: {
        type: String,
        required: [false, "User ID?"],
      },
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
      required: [true, "A account must have an email"],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please enter a valid email address'],
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
  },
);
const User = mongoose.model("Users", userSchema);

module.exports = User;
