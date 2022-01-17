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

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
};

const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
};

const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
};


const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
};

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
};
const postRouter = express.Router();
const userRouter = express.Router();

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

postRouter.route('/:id').get(getPost);

postRouter.route('/').get(getAllPosts).post(createPost);

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

const port = 3000;
app.listen(port, () =>{
    console.log(`We are live on port ${port}`);
});


