const http = require('http');
// const { hostname } = require('os');
const port = 3000;
const myhostname ='127.0.0.1'

const myserver = http.createServer((req, response)=>{
    response.writeHead(202, {'Content-Type':'text/html'})
    response.write("<H1>Hi its first server response!</h1>")
    response.end()
});

myserver.listen(port, myhostname,  ()=>{
    console.log("Server is running well at: http://" +myhostname +":" + port + "/")
})