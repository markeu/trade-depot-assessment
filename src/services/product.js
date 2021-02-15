const path = require("path")
var cloudinary = require('cloudinary');
const fs = require("fs")
const Product = require("../models/product");
const product = require("../models/product");




const convertToObject = (str) => {
    var json = str;
    var newJson = json.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
    newJson = newJson.replace(/'/g, '"');
    return JSON.parse(newJson);
}
const createProduct = async(body, file) => {
    cloudinary.config({
        cloud_name: 'uchay',
        api_key: '526356814826735',
        api_secret: 'mEfdFc35cNJ52bkQVHPWiGl7VQw'
    });
    try {
        const images = await cloudinary.uploader.upload(file.path);
        const image_url = images.url || 'image'

        var geo = convertToObject(body.geo_details)
        var user = convertToObject(body.user_details)

        const data = { geo_details: geo, user_details: user, image_url }

        const product = new Product(data);
        product.save();

        return {
            status: true,
            message: "Product successfully created",
            data: product
        };
    } catch (error) {
        return {
            status: false,
            message: "An error occurred trying to add a product",
            error: error.message
        };
    }
}

const getProductByLocation = (param) => {
    try {
        const { location } = param;
        return product.find({
            "geo_details.city": location

        }).then(res => {
            return {
                status: true,
                message: "Product successfully retrieved",
                data: res
            }
        }).catch(error => console.log(error))

    } catch (error) {
        return {
            status: false,
            message: "An error occurred trying to add a product",
            error: error.message
        };
    }
}

module.exports = {
    createProduct,
    getProductByLocation
}