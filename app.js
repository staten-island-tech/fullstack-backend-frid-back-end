const express = require("express");
const morgan = require("morgan");
const AppError = require("./appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.RequestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler);

console.log("Test");

module.exports = app;
