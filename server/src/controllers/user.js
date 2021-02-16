const { user } = require("../services")
const { response } = require("../helpers")

const createUser = async(req, res) => {
    const data = await user.createuser(req.body)
    return response(res, data);
}

const signin = async(req, res) => {
    const data = await user.signin(req.body)
    return response(res, data);
}

module.exports = {
    createUser,
    signin
}