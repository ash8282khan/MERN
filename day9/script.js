const express = require('express')
const fs = require('fs')
const fsPromises = require('fs/promises')

const app = express()

app.use(express.json());

app.get('/api/product',  (req, res)=> {
    console.log('request received')
    const data= fs.readFileSync('./data.json', "utf8");
    const arr = JSON.parse(data).products;
    res.json({
      status:"success",
      results: arr.length,
      data:{
        products:arr
      }
      
      
      
      
    })
  });
  
  
  app.post('/api/product', async (req, res)=> {
    // console.log.(req.body);
    const data = req.body;
    data.id=121;
    console.log(data);

    const db= await fsPromises.readFile('./data.json', "utf8");
    const arr1= JSON.parse(db);
    const len = arr1.length;
    if(len==0){
      const newProduct = data;
      newProduct.id = 1;
      console.log(arr1);
      arr1.push(newProduct);
      console.log(arr1);
      fsPromises.writeFile("./data1.json", JSON.stringify(arr1));
      
    }
    else{
      const newId = arr1[len-1];
      fsPromises.writeFile("./data1.json", JSON.stringify(arr1));
    }
  res.send('work in progress');
});

// app.put('/api/product',  async (req, res)=> {
//   // console.log(req);
//   const arr = JSON.parse( await fsPromises.readFile("./data.json", "utf8"));

//   res.send('work in progress.........');
//   const reqId = req.params.id;
//   const data = req.body;
//   data.id = reqId;
//   const newArr = arr.map((elem)=>{
//     if(elem.id==reqId){
    
//     }
//   });
    



// })


// app.put('/about',  (req, res)=> {
//   res.send('this is home page ');
// })

app.delete('/api/product', async (req, res)=> {
  const arr = JSON.parse( await fsPromises.readFile("./data.json", "utf8"));
  
})



app.listen(1400)