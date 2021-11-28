const { createUser } = require('../../Controllers/user-management/create-user')

const registerHandler = (req, res, next) => {
    console.log(req.body);
    createUser(req.body).then((data) => {
        res.status(200).json(data);0
        
    }).catch((err) => {
        console.log("error while register");
        res.status(500).json(err);
    })
}

module.exports = { registerHandler }