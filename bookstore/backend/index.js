import express from "express";
import {PORT, mongoDBurl} from "./config.js";
import mongoose from "mongoose"
import {Book} from "./models/bookModel.js"
import booksRoute from './routes/booksRoute.js'

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    console.log(req);
    return res.status(211).send("Welcome to MERN project")
});

app.use('/books', booksRoute);

mongoose
.connect(mongoDBurl)
.then(()=>{
    console.log("connected to database");
    app.listen(PORT, ()=>{
        console.log(`listening to port : ${PORT}`)
    });
})
.catch((error)=>{
    console.log(error)
})


