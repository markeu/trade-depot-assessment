const { Router } = require("express");

const { comment } = require("../controllers");

const routes = Router();

routes.post("/postComment", comment.postComment)
routes.get("/getProductComment", comment.getProductComment)

module.exports = routes