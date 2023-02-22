const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const mymiddleWare = (req, res, next)=>{
    console.log(`This is middlware`);
    req.currentTime = new Date(Date.now());
    next();
};

app.use(mymiddleWare);

app.get("/", (req, res)=>{
    res.send(`<h3>Server is running : http//localhost:${PORT} at: ${req.currentTime}</h3>`)
    console.log(`This is main at: ${req.currentTime}`);
})

app.get("/about", (req, res)=>{
    res.send(`<h3>About page is running : http//localhost:${PORT} at: ${req.currentTime}</h3>`)
    console.log(`This is About at: ${req.currentTime}`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running : http//localhost:${PORT}`)
})