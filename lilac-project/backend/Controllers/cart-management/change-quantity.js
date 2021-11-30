const { cartSchema } = require('../../Models/cartModels');
let mongo = require('mongoose');
const { mongoose } = require('../../Config/mongo-connection');
const changeQuantity = (userId, proId, type) => {
    return new Promise(async (resolve, reject) => {
        const cartInfo = mongoose.model('cart', cartSchema);
        
        //FETCHING THE USER CART
        let cartPro = await cartInfo.findOne({ user: userId, 'products.items': mongo.Types.ObjectId(proId) });
        
        //FINDING THE PRODUCT IN THE CART
        let find = cartPro.products.find((elem) => elem.items.equals(proId));
        if (find) {

            //RESTRICTING THE PRODUCT QUANTITY TO LOWER THAN 1
            //TYPE - 1 IS INCREMENTING, TYPE -2 IS DECREMENT
            if (find.quantity > 1 || find.quantity == 1 && type == 1) {
                //UPDATING THE CART
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