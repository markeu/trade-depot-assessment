const { Router } = require("express");

const { product } = require("../controllers");
const { uploads } = require("../middlewares");

const routes = Router();

routes.post("/createProduct", uploads, product.createProduct)
routes.get("/getProducts", product.getByLocation)

module.exports = routes;