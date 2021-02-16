const { product } = require("../services")
const { response } = require("../helpers")

const createProduct = async(req, res) => {
    const data = await product.createProduct(req.body, req.file)
    return response(res, data);
}

const getByLocation = async(req, res) => {
    const data = await product.getProductByLocation()
    return response(res, data);
}

module.exports = {
    createProduct,
    getByLocation
}