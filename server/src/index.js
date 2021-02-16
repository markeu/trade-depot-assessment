require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const formData = require("express-form-data");
const logger = require("morgan");
const mongoose = require("mongoose");

const routes = require("./routes");
const { env } = require("./configs");

const app = express();
const server = http.createServer(app);
const port = env.port;

mongoose
    .connect("mongodb+srv://markeu:uzochukwu1!@cluster0.1kkhs.mongodb.net/tradedepot?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err.message));

//app.use(formData.parse());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("", routes);


server.listen(port, () => {
    console.log(`Trade depot assessment is running on http://localhost:${port}`);
});