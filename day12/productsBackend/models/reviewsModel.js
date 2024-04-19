const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    userId:{
        type: Number,
        required: true,
    },
    productId:{
        type:String,
        required : true
    },
    
    rating:{
        type:Number,
        required:true,
    },

    review : String,
    
    createdAt:{
        type: Date,
        default: new Date(),
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    }
})

const reviewModel = mongoose.model('reviews', reviewSchema);

module.exports = reviewModel; 