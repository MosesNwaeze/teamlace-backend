const res = require("express/lib/response");
const connection = require("../configurations/database_connection");

const fetchMultiple = async (req, res) => {
  try {
    const sql = `SELECT * FROM product`;
    await connection.query(sql, (error, result) => {
      if (error) {
        console.log(error.message);
        return res.status(500).json({
          status: "error",
          data: "Internal Server Error",
        });
      }

      if (result.length <= 0) {
        return res.status(404).json({
          status: "Resource Not Found",
        });
      }
      return res.status(200).json({
        status: "success",
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = fetchMultiple;
