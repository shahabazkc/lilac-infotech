const { cartSchema } = require('../../Models/cartModels');
const { mongoose } = require('../../Config/mongo-connection');

const getCartProducts = (userId) => {
    const cartInfo = mongoose.model('cart', cartSchema);
    return new Promise(async (resolve, reject) => {
        cartInfo.aggregate([
            {
                $match: { user: userId }
            },
            {
                $unwind: '$products'
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'products.items',
                    foreignField: '_id',
                    as: 'cartproducts'
                }
            },
            { $unwind: "$cartproducts" }
        ]).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err);
        })


    })

}
module.exports = { getCartProducts }