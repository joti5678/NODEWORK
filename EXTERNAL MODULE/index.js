// const randomFruitsName = require('random-fruits-name')
// const moviesNames = require('movies-names');
// console.log(randomFruitsName());
// console.log(moviesNames.all)

const http = require('http');
const fs = require('fs');
const port = 3000;
const myhostname ='127.0.0.1'


const myserver = http.createServer((req, response)=>{

    const rewritecodes = (statuscode, filelocation)=>{
        fs.readFile(filelocation, (err, data)=>{
            response.writeHead(statuscode, {'Content-Type':'text/html'})
            response.write(data)
            response.end()
        })
    }
    
    if(req.url === '/'){
        rewritecodes(200,'./views/index.html')
    }
    else if(req.url === '/about'){
        rewritecodes(200,'./views/about.html')
    }
    else if(req.url === '/contact'){
        rewritecodes(200,'./views/contact.html')
    } else{
        rewritecodes(404,'./views/404.html')
    }
    
    
    // response.write("<H1>Hi its first server response!</h1>")
    // response.end()
    // console.log(req.url);
});

myserver.listen(port, myhostname,  ()=>{
    console.log("Server is running well at: http://" +myhostname +":" + port + "/")
})

