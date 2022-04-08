const mysql = require("mysql");

const connectionProperties = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "teamlace",
  port: "3306",
};
const connection = mysql.createConnection(connectionProperties);
connection.connect((error) => {
  if (error) {
    console.error(error);
    return;
  }
});

module.exports = connection;
