const express = require("express");
const cookieParser = require("cookie-parser");
const middleware = require("../Middleware/error");
const cors = require('cors');
const app = express();

const product = require("../Routes/Product");
const users = require("../Routes/user");
const order = require("../Routes/order");

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your actual frontend domain
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", product);
app.use("/api/v1", users);
app.use("/api/v1", order);

app.use(middleware);

module.exports = app;
