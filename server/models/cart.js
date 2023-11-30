const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    }, 
    desc: {
        type:String,
        required:true
    }, 
    price: {
        type:Number,
        required:true
    },
    quantity: {
        type: Number,
        required:true
    },
    shop: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Cart',CartSchema)