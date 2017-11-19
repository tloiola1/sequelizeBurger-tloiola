# Burger 2: The Sequel

Sequelize Eat-da-burger

For this application to work properly you are going to need to run a database and a MySQL password. To make things easier, follow the steps. 
1-	Create a database called "sequelizeburgers_db", do not create a table since sequelize will create it for you.
2-  Go to the config/config.json file and add your password, assuming that you are going to use locally; otherwise, add your credentials to that file.
3-	In your terminal, download node_modules necessary for your dependencies by entering npm install. 
4-	You are all set!

##Overview 

This Program is a full MVC application on node.js interacting with MySQL as source of data. The first file to run is the server.js, which is requiring the dependencies necessaries to run the application such as, express, body-parser, express-handlebars, method-override, and mysql. It is connecting to port 3002 or any other port that is available. App first run on the main HTML body as default layout using Handlebars.

Second, it syncs to the database through the index.js file and config.json to look for the credentials, then it creates a table pre designed in the models/burger.js file. Now it connect to the database and Port connection should be 8080.

Open your browser on localhost:8080

Assuming your database is empty, lets go and add some yummy burger into your database.

Notice that if you just hit place oder button it will not allow you to create, or add an item to your database. Its using node validator to validate user input. So add something YUMMY in there. 

Now you have a burger on left window.

You notice that each burger on the left, has not been eaten yet, So they have a button, that if clicked, it is going to restart the database and move that burger you have just clicked to devoured side, right side.

It is all happening inside your database as well. If you go back to your database, you notice the changes you have made to it. If not, you might need to refresh the database.
