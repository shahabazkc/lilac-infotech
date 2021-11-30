const jwt = require('jsonwebtoken');

const userCheck = (req, res) => {
    let token = req.header('x-access-token');
    if (!token) return res.status(200).json({ status: false, msg: "No token authorisation denied" })
    else {
        token = token.split(" ")[1];
        try {
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    return res.json({ status: false, message: "Token is Expired!" });
                }
                else {
                    req.user = user;
                    res.status(200).json({ auth: true, status: true,user, message: "Token Validated" })
                }
            })
        }
        catch (err) {
            res.status(400).json({ msg: "Token is Invalid",status:false });
        }
    }
}

module.exports = { userCheck }