const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/products_db')

// created product schema using mongoose
const Schema = mongoose.Schema;
const productSchema = new Schema({
  name:String,
  description:String,
  price:Number,
},{collection:'products'})

const Product = mongoose.model('Product',productSchema)
module.exports = Product 