const data = require("./test_data");

const addProduct = (req, res) => {
  try {
    const payload = req.body;

    data.push(payload);
    return res.status(200).json({
      status: "success",
      data: result.insertId,
    });
  } catch (error) {}
};

module.exports = addProduct;
