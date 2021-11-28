const mongoose = require('mongoose');

//connecting mongoose
mongoose.connect(`mongodb://localhost:27017/lilac-ecom`);


const conSuccess = mongoose.connection;

conSuccess.once('open', () => {
    console.log("Database Connected");
})




module.exports = { mongoose };
