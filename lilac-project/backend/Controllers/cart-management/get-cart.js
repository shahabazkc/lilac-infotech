const { cartSchema } = require('../../Models/cartModels');
const { mongoose } = require('../../Config/mongo-connection');

const getCartProducts = (userId) => {
    const cartInfo = mongoose.model('cart', cartSchema);

    return new Promise(async (resolve, reject) => {
        
        //AGGREGATING THE USER CART WITH PRODUCT COLLECTION
        cartInfo.aggregate([
            {
                $match: { user: userId }
            },
            {
                $unwind: '$products'
            },
            {
                $project: {
                    item: '$products.items',
                    quantity: '$products.quantity'
                }
            },
            {
                $lookup:{
                    from: "products",
                    localField: 'item',
                    foreignField: '_id',
                    as: 'product'
                  }
            },
            {
                $project: {
                    item: 1, quantity: 1, product: { $arrayElemAt: ['$product', 0] }
                }
            }
        ]).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err);
        })


    })

}
module.exports = { getCartProducts }