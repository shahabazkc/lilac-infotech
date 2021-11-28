const {getCartProducts} = require('../../Controllers/cart-management/get-cart');

const cartView = (req,res) => {
    let userId;
    getCartProducts(userId).then((response)=>{
        res.status(201).json(response)
    }).catch((err)=>{
        res.status(501).json({status:false});
    })
};

module.exports = {cartView}