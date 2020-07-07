var express = require("express");
var exphbrs = require("express-handlebars")
var mongoose = require("mongoose");
var logger = require("logger");

var app = express();

var PORT = process.env.PORT || 3000;

// app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/Articlesdb", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, function () {
  console.log(`Listening on http://localhost:${PORT}`);
});
