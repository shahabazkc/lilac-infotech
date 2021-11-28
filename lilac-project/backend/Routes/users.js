const express = require('express');
const router = express.Router();
const { verifyToken } = require('../Controllers/authentication/jwtAuth');

const { registerHandler } = require('../Services/users/registerHandler');
const { loginHandler } = require('../Services/users/loginHandler');
const { addToCart } = require('../Services/cart/cart-add')
const { cartView } = require('../Services/cart/cart-view')
const { getProducts } = require('../Services/products/get-products');

router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.post('/get-products', getProducts);
router.post('/add-to-cart/:id', verifyToken, addToCart);
router.get('/get-cart', verifyToken, cartView);




module.exports = router;