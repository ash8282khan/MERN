
const fs = require('fs');
const http= require("http");
const url= require("url");
const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data).products;

const inputElement=`
<form action ='/product'>
<input type="text" name="productName"  >
<button type='submit'>Search</button>
</form>
`
// console.log(dataObj)

// const pageTemplate = fs.readFileSync("./templates/page.html", "utf-8");
const cardTemplate = fs.readFileSync("./templates/card.html", "utf-8");

// const cardTemplate =`
// <div class = 'product-card'>
// <h3>TITLE</h3>
// </div>
// `;


let result = [];
for(let i =0; i< dataObj.length;i++){
    let temp = cardTemplate;
    temp= temp.replace('TITLE',dataObj[i].title);
    temp= temp.replace('URLIMG',dataObj[i].images[0]);
    temp= temp.replace('INFO',dataObj[i].description);
    temp= temp.replace('PRICE',dataObj[i].price);
    temp= temp.replace('$BRAND$',dataObj[i].brand);
    temp= temp.replace('PRODUCT_LINK',`/product?id=${i}`);
    result.push(temp);
}
result = result.join( ' ');
// console.log(result);

const server = http.createServer((req, res)=>{
    // const route = req.url;
    // console.log(route);
    // const path = url.parse(req.url);
    // const pathname = path.pathname
    res.writeHead(201, {
        'Content-Type': 'text/html'
      });
      

    const {pathname,query} = url.parse(req.url,true)
    console.log('\n',pathname,'\n');
    if(pathname=='/home'){
        // res.end(result);
        res.end(inputElement+result)
    }
    else if (pathname == '/product'){
        // const id = query.id;
        const pname=query.productName;
        if(pname){
            // res.end(pname);
            const searchResult = dataObj.filter((elem)=>{
                if(elem.title.includes(pname)){
                    return true;
                }
                else{
                    false;
                }
            })
        res.end(JSON.stringify(searchResult));
        }

        else{
            res.end('error 404')
        }
        // console.log(dataObj[id]);
    //     let temp1 = cardTemplate;
    //     temp1= temp1.replace('TITLE',dataObj[id].title);
    // temp1= temp1.replace('URLIMG',dataObj[id].images[0]);
    // temp1= temp1.replace('INFO',dataObj[id].description);
    // temp1= temp1.replace('PRICE',dataObj[id].price);
    // temp1= temp1.replace('$BRAND$',dataObj[id].brand);

    // temp1= temp1.replace('PRODUCT_LINK',`/product?id=${id}`);
    // result.push(temp1);
    
        // res.end(temp1);
    }
    else if(pathname=='/search'){
        // let temp2 =pageTemplate;
        // temp2= temp2.replace('')

    }
    else{
        res.end('404... not found');
    }
    // res.end(result);
});

server.listen(1400);