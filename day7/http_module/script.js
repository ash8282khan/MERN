//--------------------------

// const http = require('http');

// const app = http.createServer((req,res)=>{
//     console.log('recieved');
// });

// app.listen(1400);

//-------link---------- http://localhost:1400/

//---------------------------

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log('Request recieved');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type':'text/html'
//     })
//     res.end('<h2>Hello!</h2>');
// });
// server.listen(1400,()=>{
//     console.log('.............server Start.............');
// });

//-------------------------mini project --------------------

const http = require('http');

const fs = require('fs');
const { log } = require('console');

const data = fs.readFileSync('data.json','utf-8');

const dataObj= JSON.parse(data);
// console.log(dataObj);

const products = dataObj.products;


const htmlTemplate =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 7</title>
</head>
<body>
    <h1>product-card</h1>

    
    <script src="script.js"></script>
</body>
</html>`;

const cardTemplate=`
<div class = 'product-card'>
<h4>Title</h4>
<p>Info</p>
<img src='imgurl' >
<h4>Price<h4>
</div>
`;

    
 
// const card1 = cardTemplate.replace('Title',products[0].title)
//                         .replace('Info',products[0].description);
// const card2 = cardTemplate.replace('Title','Xiaomi 13 pro')
//                         .replace('Info','13999rs...');
// const card3 = cardTemplate.replace('Title','redmi note 13 pro')
//                         .replace('Info','15999rs...');

// const allCards= card1+card2+card3;

const allCards = products.map((elem)=>{
    let newCard= cardTemplate;
    newCard = newCard.replace('Title',elem.title)
    newCard = newCard.replace('Info',elem.description)
    newCard = newCard.replace('imgurl',elem.images)
    newCard = newCard.replace('Price',elem.price)
    
    return newCard;
})

const page = htmlTemplate.replace('product-card',allCards);

const server = http.createServer((req,res)=>{
    console.log('Request recieved');
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html'
    })
    res.end(page);
});
  
server.listen(1400,()=>{
    console.log('.............server Start.............');
});
































