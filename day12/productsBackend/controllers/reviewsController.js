const { response } = require("express");
const reviewsModel = require("../models/reviewsModel.js")

const getAllReviews = async (req, res) => {
    
    const data = await reviewsModel.find();
    console.log(req.url);

    res.json({
        status: 'success',
        results: 0,
        data: {
            products: data,
        }
    })
}

const addReviews = async (req, res) => {
    try {
        const data = await reviewsModel.create(req.body);
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
    getAllReviews,
    addReviews
}