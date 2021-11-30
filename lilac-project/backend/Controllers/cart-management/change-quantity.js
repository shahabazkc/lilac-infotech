const { cartSchema } = require('../../Models/cartModels');
let mongo = require('mongoose');
const { mongoose } = require('../../Config/mongo-connection');
const changeQuantity = (userId, proId, type) => {
    return new Promise(async (resolve, reject) => {
        const cartInfo = mongoose.model('cart', cartSchema);
        let cartPro = await cartInfo.findOne({ user: userId, 'products.items': mongo.Types.ObjectId(proId) });
        let find = cartPro.products.find((elem) => elem.items.equals(proId));
        if (find) {
            if (find.quantity > 1 || find.quantity == 1 && type == 1) {
                cartInfo.updateOne({ user: userId, 'products.items': mongo.Types.ObjectId(proId) },
                    {
                        $inc: { 'products.$.quantity': type }
                    }).then(async (response) => {
                        resolve({ quantityChange: true })
                    }).catch((err) => {
                        reject({ err: "something went wrong" })
                    })
            }
            else {
                resolve({ quantityChange: false })
            }

        }
        else {
            resolve({ quantityChange: false })
        }

    })

}

module.exports = { changeQuantity }