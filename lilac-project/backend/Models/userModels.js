const { mongoose } = require('../Config/mongo-connection');

var Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    password:{type:String,required:true},
    email:{type:String,required:true}
});

module.exports = { userSchema };