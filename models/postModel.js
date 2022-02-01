const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A post must have a name'],
    },
    totalLikes: {
        type: Number,
        default: 0
    },
    totalDislikes: {
        type: Number,
        default: 0
    },
    songs: [String],

    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const Post = mongoose.model('Posts', postSchema);

module.exports = Post; 