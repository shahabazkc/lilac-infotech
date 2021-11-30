const express = require('express');
const router = express.Router();
const { verifyToken } = require('../Controllers/authentication/jwtAuth');

const { registerHandler } = require('../Services/users/registerHandler');
const { loginHandler } = require('../Services/users/loginHandler');
const { addToCart } = require('../Services/cart/cart-add')
const { cartView } = require('../Services/cart/cart-view')
const { getProducts } = require('../Services/products/get-products');
const { userCheck } = require('../Services/users/loginCheck');
const { removeProd } = require('../Services/cart/remove-product');
const { changeQty } = require('../Services/cart/quantity-change');
router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.post('/get-products', getProducts);
router.post('/add-to-cart', verifyToken, addToCart);
router.get('/get-cart', verifyToken, cartView);
router.post('/change-quantity', verifyToken, changeQty);
router.put('/remove-product', verifyToken, removeProd)
router.get('/user-check', userCheck);




module.exports = router;