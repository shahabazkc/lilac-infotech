const { fetchProducts } = require('../../Controllers/product-management/product-handler');

//GET PRODUCTS ROUTE HANDLER
const getProducts = (req, res) => {
    let { type } = req.body;
    fetchProducts(type).then((response) => {
        if (response) {
            res.json(response);
        }
        else {
            res.status(200).json({ status: false, auth: false });
        }
    }).catch((err) => {
        res.status(500).json(err);
    })
}

module.exports = { getProducts }