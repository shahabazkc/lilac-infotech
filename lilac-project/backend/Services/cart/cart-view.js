const {getCartProducts} = require('../../Controllers/cart-management/get-cart');
const {getTotal} = require('../../Controllers/cart-management/get-total');
const {getWithProductTotal} = require("../../Controllers/cart-management/product-with-total");
const cartView = async (req,res) => {
    let {userId} = req.jwt;
    if(userId){
        let getTotalAmount = await getTotal(userId);
        getWithProductTotal(userId).then((response)=>{
            let resp = {cart:response,cartTotal:getTotalAmount}
            res.status(201).json(resp)
        }).catch((err)=>{
            res.status(501).json({status:false});
        });

    }
    else{
        res.status(201).json({status:false});
    }
   
};

module.exports = {cartView}