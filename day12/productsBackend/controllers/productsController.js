const { response } = require("express");
const productModel = require("../models/productsModel.js")

const getAllProducts = async (req, res) => {
    const q = req.query;
    console.log(q);
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
    try {
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
    catch (err) {
        res.status(403);
        res.json({
            status: 'fail',
            message: err.message,
        });

    }
}

const replaceProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, _id: reqId };
        const res1 = await productModel.findOneAndReplace({ _id: reqId }, data);
        res.json({
            status: 'success',
            data: {
                products: res1,
            }
        });
    }
    catch (err) {
        res.status(500)
        console.log(err);
        res.json({
            status: 'fail',
            message: err.message,
        });

    }
}

const updateProduct = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const {_id, createdAt, updatedAt, ...data} = req.body;
        const products = await productModel.findOneAndUpdate({_id: reqId}, data);
        if(!products){
            res.status(400);
            res.json({
                status: 'fail',
                message: 'Id does not exist',
            })
            return ;
        }
        res.json({
            status: 'success',
            results: 1,
            data:{
                products,
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}


const deleteProduct = async (req ,res) =>{
    try{
        const reqId = req.params.id

        const deleteResponse = await productModel.deleteOne({_id: reqId})

        res.status(204)
        .json({
            status : "success",
            response : deleteResponse
        })
    }
    catch(err){
        res.status(400)
        console.log(err);
        res.json({
            status: 'fail',
            message: err.message,
        });

    }
}

module.exports = {
    getAllProducts,
    addProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}