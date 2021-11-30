const {removeProduct} = require('../../Controllers/cart-management/remove-product');

const removeProd = (req,res) => {
    let {userId} = req.jwt;
    let {proId} = req.body;
    if(userId){
        removeProduct(userId,proId).then((response)=>{
            res.status(201).json(response)
        }).catch((err)=>{
            res.status(501).json({status:false});
        })
    }
    else{
        res.status(201).json({status:false});
    }
   
};

module.exports = {removeProd}