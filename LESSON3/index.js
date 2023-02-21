const {totalmem, freemem} = require('os');
const path = require('path');

console.log(totalmem());
console.log(freemem());
console.log("Directory Name:" + __dirname);
console.log("File Name:" + __filename);


const extenname = path.extname(  __filename)
const joinname = path.join( __dirname + "/Views/newfile" +  path.extname(  __filename))
console.log("extenname Name:" +extenname);
console.log("joinname Name:" + joinname);