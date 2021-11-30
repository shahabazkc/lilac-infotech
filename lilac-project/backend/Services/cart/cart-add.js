const { cartAdd } = require('../../Controllers/cart-management/add-to-cart');

const addToCart = (req, res) => {
    let { userId } = req.jwt;
    let { proId } = req.body;
    if (userId) {
        cartAdd(proId, userId).then((response) => {
            res.status(201).json({ response })
        }).catch((err) => {
            res.status(501).json({ status: false });
        })
    } else {
        res.status(301).json({ status: false });
    }

};

module.exports = { addToCart }