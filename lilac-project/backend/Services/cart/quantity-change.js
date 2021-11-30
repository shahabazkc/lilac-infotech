const {changeQuantity} = require('../../Controllers/cart-management/change-quantity');

//CART PRODUCT CHANGING ROUTE HANDLER
const changeQty = (req,res) => {
    let {userId} = req.jwt;
    let {proId,type} = req.body;
    if(userId){
        changeQuantity(userId,proId,type).then((response)=>{
            res.status(201).json(response)
        }).catch((err)=>{
            res.status(501).json({status:false});
        })
    }
    else{
        res.status(201).json({status:false});
    }
   
};

module.exports = {changeQty}