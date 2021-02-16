const { Router } = require("express");

const { user } = require("../controllers");
const {} = require("../middlewares");

const routes = Router();

routes.post("/createUser", user.createUser);
routes.post("/login", user.signin);

module.exports = routes;