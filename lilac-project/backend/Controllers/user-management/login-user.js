const { mongoose } = require('../../Config/mongo-connection');
const { userSchema } = require('../../Models/userModels');
const bcrypt = require('bcryptjs');
const loginUser = (data) => {

    //LOGIN USER
    return new Promise(async (resolve, reject) => {
        const userModel = mongoose.model('users', userSchema);
        
        //FINDING THE USER
        let userMatch = await userModel.findOne({ email: data.email })
        
        //IF USER FOUND WITH SAME EMAIL
        if (userMatch) {
            
            //COMPARING THE BCRYPT PASSWORD IN DATABASE WITH USER ENTERED PASSWORD
            bcrypt.compare(data.password, userMatch.password).then((response) => {
                if (response) {
                    let { name, email, _id } = userMatch;
                    let response = {
                        auth: true,
                        status: true,
                        user: {
                            name, email, userId: _id
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
            }).catch((err) => {
                let response = {
                    auth: false,
                    status: false
                };
                resolve(response);
            });
        }
        else {
            let response = {
                auth: false,
                status: false
            };
            resolve(response);
        };
    })
}
module.exports = { loginUser };
