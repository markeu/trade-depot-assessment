const jwt = require("jsonwebtoken");

const generateToken = (payload, secret = "secretKey") => {
    return jwt.sign(payload, secret, { expiresIn: "1d" });;
}

const verifyToken = (token, secret = secretKey) => {
    return jwt.verify(token, secret);
}

module.exports = {
    generateToken,
    verifyToken
}