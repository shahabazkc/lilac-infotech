const { mongoose } = require('../Config/mongo-connection');

var Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    user:{type:String},
    products:{type:Array}
});  

module.exports = { cartSchema };