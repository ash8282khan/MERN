const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId:{
        type: Number,
        unique: true,
        required: true,
    },
    userName:{
        type: String,
        unique: true,
        required : true
    },
    
    mobileNo: Number,
    
    emailId : String,
    
    createdAt:{
        type: Date,
        default: new Date(),
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    }
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel; 