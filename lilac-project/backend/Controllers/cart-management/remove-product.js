const { cartSchema } = require('../../Models/cartModels');
let mongo = require('mongoose');
const { mongoose } = require('../../Config/mongo-connection');
const removeProduct = (userId, proId) => {
    return new Promise(async (resolve, reject) => {
        const cartInfo = mongoose.model('cart', cartSchema);
        cartInfo.updateOne({ user: userId },
            {
                $pull: { products: { items: mongo.Types.ObjectId(proId) } }
            }).then((response) => {
                resolve({ removeProduct: true })
            }).catch((err)=>{
                reject({err:"something went wrong"})
            })
    })

}

module.exports = { removeProduct }