const express = require('express');
const router = express.Router();

//IMPORTING THE FILE HANDLERS
const { verifyToken } = require('../Controllers/authentication/jwtAuth');
const { registerHandler } = require('../Services/users/registerHandler');
const { loginHandler } = require('../Services/users/loginHandler');
const { addToCart } = require('../Services/cart/cart-add')
const { cartView } = require('../Services/cart/cart-view')
const { getProducts } = require('../Services/products/get-products');
const { userCheck } = require('../Services/users/loginCheck');
const { removeProd } = require('../Services/cart/remove-product');
const { changeQty } = require('../Services/cart/quantity-change');

/*                ROUTES                          */

//REGISTER ROUTER
router.post('/register', registerHandler);

//LOGIN ROUTER
router.post('/login', loginHandler);

//FETCHING THE PRODUCTS
router.post('/get-products', getProducts);

//ADD TO CART ROUTE
router.post('/add-to-cart', verifyToken, addToCart);

//FETCHING USER CART
router.get('/get-cart', verifyToken, cartView);

//CHANGING CART PRODUCT QUANTITY ROUTE
router.post('/change-quantity', verifyToken, changeQty);

//REMOVE PRODUCT FROM CART ROUTE
router.put('/remove-product', verifyToken, removeProd)

//USER LOGINNED STATUS CHECK ROUTE
router.get('/user-check', userCheck);



//EXPORTING THE ROUTER
module.exports = router;