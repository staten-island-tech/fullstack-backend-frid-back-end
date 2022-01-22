const express = require('express');
const morgan = require('morgan');
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const app = express(); 

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    req.RequestTime = new Date().toISOString();
    next();
})


app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;
