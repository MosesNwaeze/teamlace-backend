const connection = require("../configurations/database_connection");

const fetchSingleProduct = (req, res) => {
  try {
    const { productId } = req.params;
    const sql = `SELECT * FROM product WHERE product_id = ${productId}`;
    connection.query(sql, (error, result) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
      if (result.length <= 0) {
        return res.status(401).json({
          status: "error",
          data: "Resource Not Found",
        });
      }
      return res.status(200).json({
        status: "success",
        //data: result,
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fetchSingleProduct;
