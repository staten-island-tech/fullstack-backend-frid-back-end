const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    req.RequestTime = new Date().toISOString();
    next();
})

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `${req.originalUrl} not found`
    });
});

module.exports = app;
