const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        let token = req.header('x-access-token');;
        token = token.split(" ")[1];
        if (!token) return res.status(401).json({ msg: "No token authorisation denied" })
        else {
            try {
                jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                    if (err) {
                        return res.status(400).json({ status: false,token:false, message: "Token is Expired!" });
                    }
                    else {
                        req.jwt = user;
                        next();
                    }
                })
            }
            catch (err) {
                return res.status(400).json({ msg: "Token is Invalid" });
            }
        }
    }
    catch (e) {
        return res.status(400).json({ msg: "Token is Invalid" });
    }
};

module.exports = { verifyToken };