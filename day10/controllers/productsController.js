const getAllProducts =  async(req, res)=>{
    // const data = fs.readFileSync('./data.json', "utf8");
    const fsPromises = require("fs/promises");
    const data = await fsPromises.readFile('./data.json', "utf8");
    const arr = JSON.parse(data);
    res.status(200);
    res.json(
        {
            status: 'success',
            results: arr.length,
            data:{
                products: arr
            }
        }
    )
}

const addProduct =  async (req, res)=>{
    const data = req.body;
    if(!data.price || !data.title){
        res.json({
            status: 'fail',
            message: 'Title or price must be provided',
        });
    }
    else{
            const db = await fsPromises.readFile("./data.json", "utf8");
            const arr = JSON.parse(db);
            const len = arr.length;
            const newProduct = data;
            if(len==0){
                newProduct.id = 1;
            }
            else{
                newProduct.id = (arr[len-1].id)+1;
            }
            arr.push(newProduct);
            res.status(201);
            fsPromises.writeFile("./data.json", JSON.stringify(arr));
        
            res.json({
                status: 'success',
                results: 1,
                data:{
                    newProduct: newProduct,
                }
            })
    }
}

module.exports={
    getAllProducts,
    addProduct,

}

