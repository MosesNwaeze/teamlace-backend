### Setup instructions

1. clone the repo and your local machine 
2. In the directory where the project is clone. run "yarn install" on your terminal to install the dependencies
3. create mysql database connection with the following details: dbName "teamlance", dbUser "root", dbPassword "root"
4. to run the test run the following command on your terminal "yarn test". this will open the test runner and run all the test suites present
5. to run the application run the following command on your terminal "yarn start". This will start the server on port 8000 as a development server


### Project structure:
     __test__ : contains the app test
     bin: contains the server information and configuration
     configurations: contains database configuration and setting for mysql database
     controllers: contains the handlers for various api in this application
     routes: contains the routes for various api used in the application
     app.js: This file is the app starting point of the application, it contains different middlewear and other files used in the application

