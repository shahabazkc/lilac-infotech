const jwt = require('jsonwebtoken');

//JWT SIGN
const jwtSign = (userData) => {
    return new Promise(async(resolve,reject)=>{
        try {
            let token = jwt.sign(userData, process.env.JWT_SECRET,{expiresIn:6000000});
            let response = { status: true, message: "JWT Signed", token }
            resolve(response);
        }
        catch (e) {
            let response = { status: false, message: "JWT Failed" };
            resolve(response);
        }
    })
    
}

module.exports = {jwtSign};