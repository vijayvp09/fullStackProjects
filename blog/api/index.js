const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = "asfgahsdaoerfgoia";

app.use(cors({credentials: true, origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser())

mongoose.connect("mongodb+srv://vijay:krishnakaali@cluster0.lepef44.mongodb.net/?retryWrites=true&w=majority")

app.post('/register',async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch(e) {
        console.log(e);
        res.status(400).json(e);
    }    
});
app.post("/login", async (req,res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.findOne({username});
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk) {
            jwt.sign({username,id:userDoc._id}, secret, {},(err, token)=>{
                if(err) throw err;
                res.cookie("token", token).json({
                    id:userDoc._id,
                    username,
                });
            });
        }
    }catch{
        res.status(400).json("wrong credentials")
    }
});
app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    });
});
app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
})

app.listen(4000);