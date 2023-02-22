const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const PORT = 3000;


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/circle", (req, res)=>{
    res.sendFile(__dirname + "/circle.html")
})

app.get("/tringle", (req, res)=>{
    res.sendFile(__dirname + "/tringle.html")
})

app.post("/tringle", (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * base * height;
    res.send(`<h1>Tringle Result is: ${area}`);
})
app.post("/circle", (req, res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h1>Circle Result is: ${area}`);
})



app.listen(PORT, ()=>{
    console.log(`Server is running : http//localhost:${PORT}`)
})