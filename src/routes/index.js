const { Router } = require("express");
const { response } = require("../helpers");
const userRoutes = require("./user");

const routes = Router();
routes.use("/", userRoutes);

routes.use((_, res) => {
    response(res, { status: false, message: "Route not found" }, 404);
});

module.exports = routes;