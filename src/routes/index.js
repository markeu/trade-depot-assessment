const { Router } = require("express");
const { response } = require("../helpers");

const routes = Router();

routes.use((_, res) => {
    xsxsx
    response(res, { status: false, message: "Route not found" }, 404);
});

module.exports = routes;