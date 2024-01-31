const express = require("express");
const path = require("path");

const router = require("./router");

const app = express();

// setup body parser;
app.use(express.urlencoded({ extended: false }));

// setup static data;
app.use(express.static(path.resolve(__dirname, "./public")));

app.use(router);

app.listen(3000, () => console.log("Server is running on port 3000..."));