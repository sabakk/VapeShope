const Router = require("express").Router;
const categoryController = require("../controllers/category-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/", categoryController.getCategories);
router.post("/", categoryController.addCategory);
router.delete("/:id", categoryController.deleteCategory);
router.put("/:id", categoryController.updateCategory);

module.exports = router;
