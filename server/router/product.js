const Router = require("express").Router;
const productController = require("../controllers/product-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductByID);
router.delete("/:id", productController.deleteProduct);
router.post("/", productController.addProduct);

module.exports = router;
