//Dependencies
var orm = require('../config/orm.js');

var burger = {
	all: function(callback){
		console.log("Burgers.JS")
		orm.all('burgers', function(result){
			callback(result);
		});
	},
	create: function(cols, vals, callback) {
		console.log("Burgers cols: "+ cols);
		console.log("Burgers vals: "+ vals);
    	orm.create("burgers", cols, vals, function(result) {
     		callback(result);
    	});
  	},
  	update: function(state, id, callback) {
  		console.log("Burgers State: "+ state);
  		console.log("Burgers Id: "+ id);
    	orm.update("burgers", state, id, function(result) {
     		callback(result);
    	});
  	}
};

module.exports = burger;