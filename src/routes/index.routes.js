const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.post('/product', async (request, response) => {
    const {name, description, gift, quantity, price} = request.body
    const productExist = await Product.findOne({name})

    if(!productExist){
        const product = await Product.create({
            name,
            description,
            price,
            gift,
            quantity
        })
        return response.json(product)
    }else{
        return response.status(400).json({erro: "Product already exists"})
    }        
})

router.get('/products', async (request, response) => {
    const products = await Product.find()
    return response.json({products})
})

router.put('/product/:id', async(request, response) => {
    const {id} = request.params
    
    const {name, description, gift, quantity, price} = request.body

    await Product.findByIdAndUpdate(id, {name, description, gift, quantity})
    return response.status(204).send()

})

module.exports = router