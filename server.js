//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var coloring = require('coloring');

var port = process.env.PORT || 3002;

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

//Set handlebars
var expHbs = require('express-handlebars');

app.engine('handlebars', expHbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes to access server
var routes = require('./controllers/burgers_controllers.js');

app.use('/', routes);

app.listen(port);

console.log('Listened Port:'+ coloring.green(coloring.bold(port)));