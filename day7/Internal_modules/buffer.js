//----------------------buffer to string and overwrite-----------------

// const obj = new Buffer.from('abcxyz');

// console.log(obj);
// console.log(obj.toString());
// obj.write("other")
// console.log(obj);
// console.log(obj.toString());


//--------------------------create or write file and read file  ----------------
// const fs= require('fs');
// fs.writeFileSync('logs.txt', "fghjkl;sdfghjkfg");


// const fs= require('fs');
// console.log('start')
// const data=fs.readFileSync('logs.txt', {encoding: 'utf-8'});
// console.log(data);
// console.log('End');



//--------------------promises in file system --------------------------------------------

// const fsPromise= require('fs/promises');
// console.log('Start');
// const pr = fsPromise.readFile('myReadme.txt',{encoding: 'utf-8'});

// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
//     console.log('End...');

// })
// console.log('End');

//-------------------------callBack in fileSystem------------------------

const fs = require('fs');
fs.readFile('myReadme.txt',{encoding: 'utf-8'},(err,data)=>{
    console.log(data);
});






































