const bcrypt = require("bcrypt");
const connection = require("../configurations/database_connection");

const register = async (req, res) => {
  const payload = req.body;
  const { username, password } = payload;
  try {
    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );

    
    if (!hashedPassword) {
      return res.status(500).json({
        status: "error",
        data: "Internal Server Error",
      });
    }

    if(username === "" || password === ""){
      return res.status(403).json({
        status: "error",
        data: "Username, Password cannot be empty",
      });
    }
    const sql = `INSERT INTO USER (username,password) VALUES('${username}','${hashedPassword}')`;

    connection.query(sql, (error, result, fields) => {
      if (error) {
        return res.status(500).json({
          status: "error",
          data: "Internal Server Error",
        });
      } else {
        return res.status(200).json({
          status: "success",
          data: result.insertId,
        });
      }
    });
  } catch (error) {
    console.log(error.message);
    return;
  }
};

module.exports = register;
