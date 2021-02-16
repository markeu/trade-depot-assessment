const Comment = require("../models/comment")
const Product = require("../models/comment")

const postComment = async(body) => {
    try {
        const { product_id, user_id, comment } = body

        const checkProduct = Product.find({
            "product_id": product_id

        })
        if (!checkProduct) {
            return {
                status: false,
                message: "Product does Not Exist"
            };
        }

        const data = new Comment({
            product_id,
            user_id,
            comment
        });

        data.save();

        return {
            status: true,
            message: "Comment successfully created",
            data
        };
    } catch (error) {
        return {
            status: false,
            message: "An error occurred trying to create a comment",
            error: error.message
        };
    }
}


const getAllProductComment = (params) => {
    try {
        const { product_id } = params
        return Product.find({
            "product_id": product_id

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
            message: "An error occurred trying to fetch product comment",
            error: error.message
        };
    }
}

module.exports = {
    postComment,
    getAllProductComment
}