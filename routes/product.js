const router = require("express").Router();
const fetchSingleController = require("../controllers/fetch-single-product");
const fetchMultipleController = require("../controllers/fetch-multiple");
const deleteProductController = require("../controllers/delete");
const addProductController = require("../controllers/add-product");

router.post("/add-product", addProductController);
router.get("/product/:productId",fetchSingleController);
router.get("/products",fetchMultipleController);
router.delete("/remove-product", deleteProductController);

module.exports = router;