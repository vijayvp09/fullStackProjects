import express from "express";
import {PORT, mongoDBurl} from "./config.js";
import mongoose from "mongoose"
import {Book} from "./models/bookModel.js"

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    console.log(req);
    return res.status(211).send("Welcome to MERN project")
});

app.post('/book', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send all require fields: title, author, publishYear",
            });
        }
        const newBook = { 
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);
    }catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            books: books
        })
    }catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});
app.get('/books/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const book = await Book.findById(id);

        return res.status(200).json(book)
    }catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});
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


