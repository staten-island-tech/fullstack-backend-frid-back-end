

const dummyInfo = [
    {
        postID: 1326962963783,
        likes: 20,
        comments: 5, 
        UserID: 30470578947,
    }
];


exports.getAllPosts =  (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            dummyInfo,
            time: req.RequestTime
        }
    })
};


exports.getPost = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
          id: req.params.id
        }
    })
}


exports.createPost = (req, res) => {
    dummyInfo.push(req.body);
    res.status(201).json({
        status: "success",
        data: {
         dummyInfo: req.body
        }
    })
}