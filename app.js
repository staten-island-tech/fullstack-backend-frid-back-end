const express = require("express");
const morgan = require("morgan");
const AppError = require("./appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  req.RequestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`${req.originalUrl} not found`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
