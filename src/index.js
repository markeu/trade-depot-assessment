require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const formData = require("express-form-data");
const swaggerUi = require("swagger-ui-express");

const routes = require("./routes");
const { env, swagger } = require("./configs");

const app = express();
const server = http.createServer(app);
const port = env.port;

app.use(formData.parse());
app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
app.use("", routes);

server.listen(port, () => {
  console.log(`WAYAGram __ service is running on http://localhost:${port}`);
});
