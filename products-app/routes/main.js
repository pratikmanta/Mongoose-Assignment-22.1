var express = require('express');
var router = express.Router();
const Product = require('../model/Product.js')

// gets the product-form 
router.get('/', function(req, res, next) {
  res.render('products-form',{title:'Products Form'})
});

// post details in product form
router.post('/',function(req, res) {
  let product = {
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
  }
  let data = new Product(product)
  data.save()
  res.redirect('/products')
})

// gets the list of products 
router.get('/products', function(req, res, next) {
  Product.find()
  .then(products => {
    res.render('products', { title: 'Product List', products:products });
  })
  .catch(err=>{
    console.log(err,'error getting data')
  })
});

// gets the product-details by id
router.get('/productdetails/:id', function(req, res, next) {
  const {id} = req.params
  Product.findById(id)
  .then(product => {
    res.render('product-details',{title:'Product details',product:product})
  })
});





module.exports = router;
