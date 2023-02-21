const express = require('express');
const app = express();

app.get("/",(req, res)=>{
    res.send("I'm a get request at Home Route")
});

app.post("/",(req, res)=>{
    res.send("I'm a post request at Home Route")
});

app.put("/",(req, res)=>{
    res.send("I'm a put request at Home Route")
});

app.delete("/",(req, res)=>{
    res.send("I'm a delete request at Home Route")
});

app.get("/about",(req, res)=>{
    res.send("I'm a get request at About Route")
});

module.exports = app;