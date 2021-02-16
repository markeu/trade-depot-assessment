const { comment } = require("../services")
const { response } = require("../helpers")

const postComment = async(req, res) => {
    const data = await comment.postComment(req.body)
    return response(res, data)
}

const getProductComment = async(req, res) => {
    const data = await comment.getAllProductComment(req.query)
    return response(res, data)
}

module.exports = {
    postComment,
    getProductComment
}