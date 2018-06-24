var express = require("express");

var router = express.Router();

// Importing model
var burger = require("../models/burger.js");

// Route logic for urls
router.get("/", function(req, res) {
 res.render('index')
});

router.post("/api/burgers", function(req, res) {
 res.json(req.body);
});

router.put("/api/burgers/:id", function(req, res) {
res.json(req.params.id);
});

// Export routes for server.js to use.
module.exports = router;
