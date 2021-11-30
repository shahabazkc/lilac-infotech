const { cartSchema } = require('../../Models/cartModels');
let mongo = require('mongoose');
const Joi = require('@hapi/joi')


const { mongoose } = require('../../Config/mongo-connection');
const cartAdd = (proId, userId) => {
    const cartInfo = mongoose.model('cart', cartSchema);
    return new Promise(async (resolve, reject) => {
        try {
            let proObj = {
                items: mongo.Types.ObjectId(proId),
                quantity: 1
            }
            let userCart = await cartInfo.findOne({ user: userId })

            if (userCart) {
                let proExist = userCart.products.findIndex(e => e.items == proId)
                if (proExist != -1) {
                    cartInfo.updateOne({ user: userId, 'products.items': mongo.Types.ObjectId(proId) }, { $inc: { 'products.$.quantity': 1 } }).then((res) => {
                        resolve(res)
                    })
                } else {
                    cartInfo.updateOne({ user: userId },
                        {
                            $push: {
                                products: proObj
                            }
                        }).then((response) => {
                            resolve(response)
                        })
                }
            } else {
                const cart = new cartInfo({
                    user: userId,
                    products: proObj
                })
                cart.save((err, details) => {
                    if (err) {
                        console.log("error" + err)
                    } else {
                        resolve(details)
                    }
                })
            }
        }
        catch (e) {
            reject(e);
        }
    })
};



module.exports = { cartAdd }
