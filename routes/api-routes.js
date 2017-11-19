// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");
var validator = require("validator");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Burgers
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function(dbBurger) {
      // We have access to the Burgers as an argument inside of the callback function
      res.render('index', {burgers: dbBurger});
    });
  });

  // POST route for saving a new Burger
  app.post("/api/create", function(req, res) {
    //validation not pass if input is empty
    if(validator.isEmpty(req.body.burger_name)){
    console.log('*******'+ validator.isEmpty(req.body.burger_name)+'**********');
      return;
    }

    db.burgers.create({
      burger_name: req.body.burger_name
    }).then(function(dbBurger) {
      // We have access to the new Burger as an argument inside of the callback function
      res.json(dbBurger);
    });
  });
  // DELETE route for deleting Burgers. We can get the id of the Burger we want to delete from
  // req.params.id
  app.delete("/api/delete/:id", function(req, res) {
    db.burgers.destroy({
      where:{
        id: 6
      }
    }).then(function(dbBurger){
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      else {
        res.status(200).end();
      }
    });
  });

  // PUT route for updating Burgers. We can get the updated Burger from req.body
  app.put("/api/update/:id", function(req, res) {
    var condition = req.params.id;

    db.burgers.update({
      devoured : false
    },
    {
      where: {
        id: parseInt(req.params.id)
    }
    }).then(function(result){
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 
      else {
        res.status(200).end();
      }
    });

  });
};
