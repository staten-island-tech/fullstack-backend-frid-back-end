const express = require("express");
const morgan = require("morgan");
const AppError = require("./appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const cors = require("cors");
const app = express();
const { auth } = require("express-openid-connect");

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.RequestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

//app.all("*", (req, res, next) => {
//  next(new AppError(`${req.originalUrl} not found`, 404));
//});

app.use(globalErrorHandler);

console.log("Test");

module.exports = app;
