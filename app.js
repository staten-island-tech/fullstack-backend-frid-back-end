const express = require('express');

const app = express(); 

app.use(express.json());

const dummyInfo = [
    {
        postID: 1326962963783,
        likes: 20,
        comments: 5, 
        UserID: 30470578947,
    }
];



app.get('/api/v1/posts', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            dummyInfo
        }
    })
});

app.post('/api/v1/posts', (req, res) => {
    dummyInfo.push(req.body);
    res.status(201).json({
        status: "success",
        data: {
         dummyInfo: req.body
        }
    })
})

const port = 3000;
app.listen(port, () =>{
    console.log(`We are live on port ${port}`);
});


