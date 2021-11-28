const { cartSchema } = require('../../Models/cartModels');

const cartAdd = (proId, userId) => {
    const cartInfo = mongoose.model('cart', cartSchema);
    return new Promise(async (resolve, reject) => {
        let proObj = {
            items: objectId(proId),
            quantity: 1
        }
        let userCart = await cartInfo.findOne({ user: userId })

        if (userCart) {
            let proExist = userCart.products.findIndex(e => e.items == proId)

            if (proExist != -1) {
                cartInfo.updateOne({ user: userId, 'products.items': objectId(proId) }, { $inc: { 'products.$.quantity': 1 } }).then((res) => {
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
    })
};



module.exports = { cartAdd }
