const connection = require("../configurations/database_connection");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  try {
    const payload = req.body;
    const { username, password } = payload;
    const sql = `SELECT * FROM user WHERE username = "${username}"`;
    connection.query(sql, (error, result) => {
      if (error) {
        console.log(error.message);
        return res.status(500).json({
          status: "error",
          data: "Internal Server Error",
        });
      }

      if (result.length <= 0) {
        return res.status(401).json({
          status: "error",
          data: "Unauthorized Request",
        });
      }

      
      bcrypt.compare(password, result[0].password, (error, isVaried) => {
        if (error) {
          console.log(error.message);
          return res.status(500).json({
            status: "error",
            data: "Internal Server Error",
          });
        }

        if (isVaried && username === result[0].username) {
          return res.status(200).json({
            status: "success",
            data: "User is varied",
          });
        } else {
          return res.status(401).json({
            status: "error",
            data: "Unauthorized Access",
          });
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  } 
};

module.exports = login;
