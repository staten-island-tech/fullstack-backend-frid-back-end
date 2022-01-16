const express = require('express');
const morgan = require('morgan');
const app = express(); 

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    req.RequestTime = new Date().toISOString();
    next();
})

const dummyInfo = [
    {
        postID: 1326962963783,
        likes: 20,
        comments: 5, 
        UserID: 30470578947,
    }
];


const getAllPosts =  (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            dummyInfo,
            time: req.RequestTime
        }
    })
};


const getPost = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
          id: req.params.id
        }
    })
}


const createPost = (req, res) => {
    dummyInfo.push(req.body);
    res.status(201).json({
        status: "success",
        data: {
         dummyInfo: req.body
        }
    })
}
app.route('/api/v1/posts/:id').get(getPost);

app.route('/api/v1/posts').get(getAllPosts).post(createPost);

const port = 3000;
app.listen(port, () =>{
    console.log(`We are live on port ${port}`);
});


