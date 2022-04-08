const data = require("./test_data");
const fetchSingleProduct = (req, res) => {
  try {
    const { productId } = req.params;
    const product = data.map((item) => item.product_id === productId);
    if (product.length > 0) {
      return res.status(200).json({ status: "success" });
    } else {
      return res.status(404).json({ status: "error" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fetchSingleProduct;
