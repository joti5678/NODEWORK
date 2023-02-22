const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const userrouter = require('./routes/users.route');


app.use("/api/user", userrouter);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/register",(req, res)=>{
    res.statuscode = 200;
    res.sendFile(__dirname +"/form.html");
});


app.post("/register",(req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    res.send(`<h1>Student id is: ${id}</h1>\n <h2>Name: ${name}</h2> \n <h2>Age: ${age}</h2>`);


    // const id = req.header("id");
    // const name = req.header("name");
    // const age = req.header("age");
    // res.send(`<h1>Student id is: ${id}</h1>\n <h2>Name: ${name}</h2> \n <h2>Age: ${age}</h2>`);
    
    // const {id, name , age} = req.params;
    // res.send(`<h1>Student id is: ${id}</h1>\n <h2>Name: ${name}</h2> \n <h2>Age: ${age}</h2>`);

    // const {id, name , age} = req.query;
    // res.send(`<h1>Student id is: ${id}</h1>\n <h2>Name: ${name}</h2> \n <h2>Age: ${age}</h2>`);


    // res.statuscode = 200;
    // res.sendFile(__dirname +"/routes/views/index.html");

});


app.use((req, res)=>{
    res.statuscode = 404;
    res.sendFile(__dirname +"/routes/views/404.html");
});

module.exports = app;