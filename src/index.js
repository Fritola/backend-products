// require('dotenv-safe').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/index.routes')
const app = express()

mongoose.connect('mongodb+srv://gustavo:dZh7pwkFhrWPmP1r@cluster0-ujwps.mongodb.net/ambev?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000 , () => {
    console.log("Server running at 3000")
})

