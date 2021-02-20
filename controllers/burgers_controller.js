const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerData = {
            burgers: data
        };
        res.render("index", burgerData);
    });
});

module.exports = router;