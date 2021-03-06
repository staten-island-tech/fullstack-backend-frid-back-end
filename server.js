const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION! SERVER IS SHUTTING DOWN");
  process.exit(1);
});

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DataBase!");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`We are live on port ${port}`);
});

mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
});
