const app = require("./app")
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Server Running successfully at: \n "
    + "http://localhost:"+ PORT);
})