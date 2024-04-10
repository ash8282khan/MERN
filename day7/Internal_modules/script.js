const fs = require('node:fs');

// const data = fs.readFileSync("myReadme.txt");  //---------method 1
// console.log(data)
// console.log(data.toString());


const data = fs.readFileSync("myReadme.txt",{encoding: 'utf-8'});  //----------method 2 
console.log(data);