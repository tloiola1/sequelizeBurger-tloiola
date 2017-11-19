// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Burger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Burgers
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function(dbBurger) {
      console.log(dbBurger[0].dataValues);

      // We have access to the Burgers as an argument inside of the callback function
      res.render('index', {burgers: dbBurger});
    });
  });

  // POST route for saving a new Burger
  app.post("/api/create", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
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
      };
    });

  });
};
