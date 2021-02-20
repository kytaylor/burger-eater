const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Router
const router = require("./controllers/burgers_controller.js");
app.use(router);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});