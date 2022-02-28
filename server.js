const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: './config.env'});

process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log("UNCAUGHT EXCEPTION! SERVER IS SHUTTING DOWN");  
    process.exit(1);
});

const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Connected");
});


 
const port = process.env.PORT || 3000;
const server = app.listen(port, () =>{
    console.log(`We are live on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log("UNHANDLED REJECTION! SERVER IS SHUTTING DOWN");
    server.close(() => {
        process.exit(1);
    });
});
