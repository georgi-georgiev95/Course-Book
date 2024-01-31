const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const router = require("./router");

const app = express();

// setup mongoose
mongoose.connect('mongodb://localhost:27017/courseBook')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

// setup body parser;
app.use(express.urlencoded({ extended: false }));

// setup static data;
app.use(express.static(path.resolve(__dirname, "./public")));

// setup handlebars;
app.engine("hbs", handlebars.engine({
    extname: ".hbs",
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, "./views"));

app.use(router);

app.listen(3000, () => console.log("Server is running on port 3000..."));