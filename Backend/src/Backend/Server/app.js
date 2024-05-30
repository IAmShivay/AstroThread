const express = require("express");
const cookieParser = require("cookie-parser");
const middleware = require("../Middleware/error");
const cors = require('cors')
const app = express();

const product = require("../Routes/Product");
const users = require("../Routes/user");
const order = require("../Routes/order");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", product);
app.use("/api/v1", users);
app.use("/api/v1", order);

app.use(middleware);

module.exports = app;

// middleware for errorHandling
