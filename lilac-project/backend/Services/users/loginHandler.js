const { jwtSign } = require('../../Controllers/authentication/jwtSign');
const { loginUser } = require('../../Controllers/user-management/login-user');

//LOGIN POST ROUTE HANDLER
const loginHandler = (req, res) => {
    loginUser(req.body).then((response) => {
        if (response.auth) {
            jwtSign(response.user).then((payload) => {
                if (payload.status) {
                    response = {response,payload};
                    res.status(201).json(response);
                }
                else {
                    let newResp = { status: false, auth: true, jwtSign: false };
                    res.status(501).json(newResp);
                }
            }).catch((err) => {
                let newResp = { status: false, auth: true, jwtSign: false };
                res.status(501).json(newResp);
            });
        }
        else {
            res.status(200).json({ status: false, auth: false });
        }
    }).catch((err) => {
        res.status(500).json(err);
    })
}

module.exports = { loginHandler }