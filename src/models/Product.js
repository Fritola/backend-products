const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    gift: String,
    quantity: Number
})

module.exports = mongoose.model('Product', productSchema)