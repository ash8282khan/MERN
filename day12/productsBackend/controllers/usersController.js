const { response } = require("express");
const userModel = require("../models/userModel.js")

const getAllUsers = async (req, res) => {
    
    const data = await userModel.find();
    console.log(req.url);

    res.json({
        status: 'success',
        results: 0,
        data: {
            products: data,
        }
    })
}

const addUsers = async (req, res) => {
    try {
        const data = await userModel.create(req.body);
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

module.exports = {
    getAllUsers,
    addUsers
}