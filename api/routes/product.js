const express = require('express');
const productController = require('../controllers/product');

const Route = express.Router();

Route
  .get('/', productController.getProducts)
  .get('/:productId', productController.getOneProduct);

module.exports = Route;
