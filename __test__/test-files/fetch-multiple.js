const data = require("./test_data");

const fetchMultiple = async (req, res) => {
  try {
    if (data.length > 0) {
      return res.status(200).json({
        status: "success",
        data,
      });
    } else {
      return res.status(404).json({
        status: "Resource Not Found",
      });
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = fetchMultiple;
