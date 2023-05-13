const express = require("express");
const cors = require('cors');
const app = express();

require('colors');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middlewares/errors");

// Setting up config file
require("dotenv").config();

// MIDDLEWARES
app.use(cors({ origin: '*', methods: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const payment = require("./routes/payment");
const order = require("./routes/order");
const category = require("./routes/category");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", payment);
app.use("/api/v1", order);
app.use("/api/v1", category);

// Serving static assets...
if (process.env.NODE_ENV === 'production') {

  //*Set static folder up in production
  app.use(express.static('client/build'));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;