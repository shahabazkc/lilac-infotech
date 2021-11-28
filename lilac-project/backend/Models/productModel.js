const { mongoose } = require('../Config/mongo-connection');

var Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    place: { type: String, required: false },
    image: { type: String, required: true },
    cut: { type: String, required: false }
});

module.exports = { productSchema };