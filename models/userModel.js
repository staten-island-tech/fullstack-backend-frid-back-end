const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "A account must have a user name"],
        trim: true,
        default: "Bob",   
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});
const User = mongoose.model("Users", userSchema);

module.exports = User;
