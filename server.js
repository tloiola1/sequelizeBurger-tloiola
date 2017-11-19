//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models")

var PORT = 8080;//process.env.PORT || 

var app = express();

app.use(express.static('public'));

app.use(bodyParser());

//Set handlebars
var expHbs = require('express-handlebars');

app.engine('handlebars', expHbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
