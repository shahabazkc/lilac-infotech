const { mongoose } = require('../../Config/mongo-connection');
const { userSchema } = require('../../Models/userModels');
const bcrypt = require('bcryptjs');
const loginUser = (data) => {
    return new Promise(async (resolve, reject) => {
        const userModel = mongoose.model('users', userSchema);
        let userMatch = await userModel.findOne({ email: data.email })
        if (userMatch) {
            bcrypt.compare(data.password,userMatch.password).then((response) => {
                if (response) {
                    let { name, email} = userMatch;
                    let response = {
                        auth: true,
                        status: true,
                        user: {
                            name, email
                        }
                    };
                    resolve(response);
                }
                else {
                    let response = {
                        auth: false,
                        status: false
                    };
                    resolve(response);
                }
            }).catch((err)=>{
                let response = {
                    auth: false,
                    status: false
                };
                resolve(response);
            });
        }
        else{
            let response = {
                auth: false,
                status: false
            };
            resolve(response);
        };
    })
}
module.exports = { loginUser };
