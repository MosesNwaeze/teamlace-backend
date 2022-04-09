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
    console.error(error.message);
    return;
  }
  //Create a database
  const sql = `CREATE DATABASE IF NOT EXISTS teamlace;`;
  connection.query(sql, function (error) {
    if (error) {
      console.error(error.message);
      return;
    }
    const queryUser = `CREATE TABLE IF NOT EXISTS user(
      user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(200) NOT NULL UNIQUE,
      password VARCHAR(300) NOT NULL
      );`;

    connection.query(queryUser, function (error) {
      if (error) {
        console.log(error.message);
        return;
      }
    });

    const queryProduct = `CREATE TABLE IF NOT EXISTS product(
        product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        product_name VARCHAR(200) NOT NULL,
        category_id VARCHAR(300) NOT NULL,
        category_name VARCHAR(300) NOT NULL,
        unit_price DOUBLE NOT NULL,
        status VARCHAR(100) NOT NULL,
        available_since DATE NOT NULL
        );`;

    connection.query(queryProduct, function (error) {
      if (error) {
        console.error(error.message);
      }
    });
  });
});

module.exports = connection;
