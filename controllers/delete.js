const connection = require("../configurations/database_connection");

const deleteProduct = async (req, res) => {
  const { productId } = req.query;
  try {
    const query = `DELETE FROM product WHERE product_id IN (${productId})`;
    await connection.query(query, (error) => {
      if (error) {
        console.log(error.message);
        return res.status(500).json({
          status: "error",
        });
      }
    });

    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deleteProduct;
