//Dependecies
var password = require('../key.js');
// console.log(password);
// Create MySQL connection
var mysql = require("mysql");
var coloring = require('coloring');

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: password,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected ID:" + coloring.green(coloring.bold(connection.threadId)));
});

// Export connection for our ORM to use.
module.exports = connection;