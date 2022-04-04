const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const CategoryModel = require("../models/category-model");

class ProductController {
  async addCategory(req, res, next) {
    try {
      const categoryExist = await CategoryModel.findOne({
        category: req.body.category,
      });
      if (categoryExist) {
        throw ApiError.BadRequest("Category already exists");
      }

      const newCategory = new CategoryModel({
        category: req.body.category,
      });

      const productData = await newCategory.save();

      return res.json(newCategory);
    } catch (e) {
      console.log(e);

      next(e);
    }
  }

  async updateCategory(req, res, next) {
    try {
      const category = await CategoryModel.findById(req.params.id);

      if (category) {
        category.category = req.body.category ?? category.category;

        const updatedCategory = await category.save();

        return res.json(updatedCategory);
      } else {
        const category = new CategoryModel({
          category: req.body.category,
        });
        const updatedCategory = await category.save();

        return res.json(updatedCategory);
      }
    } catch (e) {
      console.log(e);

      next(e);
    }
  }

  async getCategories(req, res, next) {
    try {
      const categories = await CategoryModel.find();
      return res.json(categories);
    } catch (e) {
      next(e);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const category = await CategoryModel.findById(req.params.id);
      if (!category) {
        throw ApiError.BadRequest("Category Not Found");
      }
      await category.remove();
      return res.json({ msg: "Category removed" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProductController();
