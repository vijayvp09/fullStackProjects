const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://vijay:krishnakaali@cluster0.lepef44.mongodb.net/?retryWrites=true&w=majority")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://vijay:krishnakaali@cluster0.lepef44.mongodb.net/?retryWrites=true&w=majority")

app.post('/register',async (req, res) => {
    const {username, password} = req.body;
    try{
        const response = await User.create({username, password});
        res.json(response);
    } catch(e) {
        console.error(e)
        res.status(400)
    }
    
});

app.listen(4000);