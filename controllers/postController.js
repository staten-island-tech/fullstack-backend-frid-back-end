// const { post } = require('../routes/postRoutes');
const Post = require('./../models/postModel');
const AppError = require('./../appError');

// exports.authend = (req, res, next) =>{
//     req.oidc.isAuthendicated() ? 'logged in' : 'logged out';
//     next();
// }

exports.getAllPosts = async (req, res, next) => { 
    try {
        //this.authend (req, res, next);
        const posts = await Post.find();
    res.status(200).json({
        status: 'success',
        results: posts.length,
        data: {
            posts
        }
    });
    } catch (error) {
    next(error);
    }
};


exports.getPost = async (req, res, next) => {
    try {
    const post = await Post.findById(req.params.id);
    if (!post) {
        return next(new AppError('No post found with this ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
          post
        }
    });
}  catch (error){
    next(error);
}
}


exports.createPost = async (req, res, next) => {
    try {
    const newPost = await Post.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
         post: newPost
        }
    })
    } catch (error) {
        next(error);
    };
}

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!post) {
            return next(new AppError('No post found with this ID', 404))
        }

        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        });
    } catch (error) {
        next(error);
    }
}
exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
        });
        if (!post) {
            return next(new AppError('No post found with this ID', 404))
        }
    } catch (error) {
      next(error);
    }
}