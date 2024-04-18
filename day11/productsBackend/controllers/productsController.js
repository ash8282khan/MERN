const productModel = require("../models/productsModel.js")

const getAllProducts = async (req, res) => {
    const data = await productModel.find();
    console.log(req.url);

    res.json({
        status: 'success',
        results: 0,
        data: {
            products: data,
        }
    })
}

const addProduct = async (req, res) => {
    try{
        const data = await productModel.create(req.body);
        console.log(data);
        res.json({
            status: 'false',
            results: 1,
            data: {
                products: data
            }
        })
    }
    catch(err){
        res.status(403);
        console.log(err);
        res.json({
            status:'fail',
            message: JSON.stringify(err),
        });
       
    }
}

const replaceProduct = async (req,res)=>{
   try{ const reqId = req.params.id;
    const data = {...req.body,reqId};
    const res1 = await productModel.findOutAndReplace({_id:reqId},data);
    res.JSON({
        status: 'success',
        data:{
            products:res1,
        }
    });
    }
    catch(err){
        res.status(500)
        console.log(err);
        res.json({
            status:'--fail--',
            message: JSON.stringify(err),
        });
       
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct
}