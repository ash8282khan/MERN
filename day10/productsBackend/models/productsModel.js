const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
})

const productModel = mongoose.model('products', productSchema);

const testProduct = new productModel({
    name: 'Titen watch',
    price : 1500
});

testProduct.save().then((res)=>{
    console.log(res);
})