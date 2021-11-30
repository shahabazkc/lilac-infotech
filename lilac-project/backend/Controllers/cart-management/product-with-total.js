const { cartSchema } = require('../../Models/cartModels');
const { mongoose } = require('../../Config/mongo-connection');

const getWithProductTotal = (userId) => {
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
                $project: {
                    item: '$products.items',
                    quantity: '$products.quantity'
                }
            },
            {
                $lookup: {
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
            },
            {
                $project: {
                    totalproduct: { $sum: { $multiply: ['$quantity', '$product.price'] } },
                    item: '$item',
                    quantity: '$quantity',
                    type:'$product.type',
                    image:'$product.image',
                    name: '$product.name',
                    price: '$product.price',
                }
            },
        ]).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err);
        })


    })

}
module.exports = { getWithProductTotal }