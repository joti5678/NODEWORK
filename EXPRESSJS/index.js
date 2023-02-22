const app = require("./app")

const PORT = 3000;

// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.listen(PORT, ()=>{
    console.log("Server Running successfully at: \n "
    + "http://localhost:"+ PORT);
})