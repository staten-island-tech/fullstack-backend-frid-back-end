const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const { auth } = require("express-openid-connect");

process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log("UNCAUGHT EXCEPTION! SERVER IS SHUTTING DOWN");  
    process.exit(1);
});

const app = require('./app');

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
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

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DataBase! ╲⎝ ( ͡° ͜ʖ ͡°) ⎠╱");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`We are live on port ${port}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
});
