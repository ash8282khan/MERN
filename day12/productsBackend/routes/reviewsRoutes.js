const express = require("express");
const reviewsController = require('../controllers/reviewsController.js')
const reviewsRouter = express.Router();

reviewsRouter.route('/')
    .get(reviewsController.getAllReviews)
    .post(reviewsController.addReviews)



module.exports = reviewsRouter;
