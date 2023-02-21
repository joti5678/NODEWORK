// const randomFruitsName = require('random-fruits-name')
// const moviesNames = require('movies-names');
// console.log(randomFruitsName());
// console.log(moviesNames.all)

const http = require('http');
const fs = require('fs');
const PORT = 4001;
const myhostname ='127.0.0.1'


const rewritecodes = (statuscode, filelocation, req, response)=>{
    fs.readFile(filelocation, (err, data)=>{
        response.writeHead(statuscode, {'Content-Type':'text/html'})
        response.write(data)
        response.end()
    })
}

const myserver = http.createServer((req, response)=>{
    
    if(req.url === '/'){
        rewritecodes(200,'./views/index.html',req, response)
    }
    else if(req.url === '/about'){
        rewritecodes(200,'./views/about.html',req, response)
    }
    else if(req.url === '/contact'){
        rewritecodes(200,'./views/contact.html',req, response)
    } else{
        rewritecodes(404,'./views/404.html',req, response)
    }
   
    // response.write("<H1>Hi its first server response!</h1>")
    // response.end()
    // console.log(req.url);
});

myserver.listen(PORT, myhostname,  ()=>{
    console.log("Server is running well !")
})

