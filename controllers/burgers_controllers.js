//Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//Create routes and their logics
router.get('/', function(req,res){
	burger.all(function(data){
		var all_burgers = {
			burgers: data
		};
		console.log("All Burgers Controllers: "+ all_burgers);
		res.render('index', all_burgers);
	});
});
router.post("/api/burgers", function(req, res) {
	console.log("Burgers Controllers Create: "+req.body.burger_name);
	console.log("Burgers Controllers Create: "+req.body.devoured);
	burger.create([
		  	"burger_name", "devoured"
		], [
		  	req.body.burger_name, req.body.devoured
		], function(result) {
		  	// Send back the ID of the new quote
		  	res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	console.log("Burgers Controllers Update: "+ req.body.devoured)
	burger.update({
		devoured: req.body.devoured
	},condition, function(result) {
		if (result.changedRows == 0) {
	    	// If no rows were changed, then the ID must not exist, so 404
	    	return res.status(404).end();
	  	} 
	  	else {
	    	res.status(200).end();
	  	}
	});
});

module.exports = router;