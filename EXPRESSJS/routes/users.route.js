const express = require('express');
const router = express.Router();



router.get("/login",(req, res)=>{
    res.statuscode = 200;
    res.sendFile(__dirname +"/views/login.html");
    res.cookie("name", "joti");
    res.cookie("age", 30);
    res.clearCookie("name")
    res.append("id", 1300000076)
    res.end();
});


module.exports = router;