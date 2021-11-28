const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.header('x-access-token');
    if (!token) return res.status(401).json({ msg: "No token authorisation denied" })
    else {
        try {
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) return res.json({ status: false, message: "Token is Expired!" });
                else {
                    req.jwt = user;
                    next();
                }
            })
        }
        catch (err) {
            res.status(400).json({ msg: "Token is Invalid" });
        }
    }
};

module.exports = { verifyToken };