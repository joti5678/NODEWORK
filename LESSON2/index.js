const fs = require('fs');

// fs.writeFile('demo1.txt', "this is overwrite text", (err)=>{
//     if(err){
//         console.log("Error!")
//     }else{
//         console.log("Successfull!")
//     }
// })

fs.appendFile('demo2.txt', "this is overwrite text \n", (err)=>{
    if(err){
        console.log("appendError!")
    }else{
        console.log("append Successfull!")
    }
})

fs.readFile('demo2.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log("Read Error!")
    }else{
        console.log(data)
    }
})

// fs.rename('demo1.txt', 'demo2.txt', (err)=>{
//     if(err){
//         console.log("Rename Error!")
//     }else{
//         console.log("Rename Successfull!")
//     }
// })

// fs.unlink('demo2.txt', (err)=>{
//     if(err){
//         console.log("Delete Error!")
//     }else{
//         console.log("Delete Successfull!")
//     }
// })

// fs.exists('demo1.txt', (result)=>{
//     if(result){
//         console.log("Exist!")
//     }else{
//         console.log("Not Exist!")
//     }
// })
