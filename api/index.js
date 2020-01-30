const express = require('express');
const productRoute = require('./routes/product');

const Route = express.Router();

Route.use('/product', productRoute);

module.exports = Route;
