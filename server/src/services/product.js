const cloudinary = require('cloudinary');
const fs = require("fs");
const Product = require("../models/product");

const createProduct = async(body, file) => {
    cloudinary.config({
        cloud_name: 'uchay',
        api_key: '526356814826735',
        api_secret: 'mEfdFc35cNJ52bkQVHPWiGl7VQw'
    });
    try {

        const images = await cloudinary.uploader.upload(file.path);
        const image_url = images.url || 'image'
        fs.unlink(file.path, (err) => {
            if (err) throw err
        })

        const geo_details = {
            state: body.state,
            street: body.street,
            city: body.city,
        }
        const user_details = {
            name: body.name,
            email: body.email,
        }

        const data = { geo_details, user_details, image_url }
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

const getProductByLocation = () => {
    try {
        return Product.find().then(res => {
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