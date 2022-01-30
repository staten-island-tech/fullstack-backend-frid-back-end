const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: './config.env'});

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Connected");
});

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
    }
})
const Post = mongoose.model('Posts', postSchema);

const dummyPost = new Post ({
    name: 'Rock & Roll',
    totalLikes: 1000,
});

dummyPost.save()

const app = require('./app');
 
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`We are live on port ${port}`);
});
