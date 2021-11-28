const {cartAdd} = require('../../Controllers/cart-management/add-to-cart');

const addToCart = (req,res) => {
    let userId;
    let {proId} = req.body;
    cartAdd(proId,userId).then((response)=>{
        res.status(201).json({response})
    }).catch((err)=>{
        res.status(501).json({status:false});
    })
};

module.exports = {addToCart}