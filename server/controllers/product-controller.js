const userService = require("../service/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const ProductModel = require("../models/product-model");

class ProductController {
  async addProduct(req, res, next) {
    try {
      console.log(req.body);
      const newProduct = new ProductModel({
        brand: req.body.brand,
        text: req.body.text,
        volume: req.body.volume,
        nicotine: req.body.nicotine,
        price: req.body.price,
      });

      const productData = await newProduct.save();

      return res.json(productData);
    } catch (e) {
      console.log(e);

      next(e);
    }
  }

  async getProducts(req, res, next) {
    try {
      const products = await ProductModel.find();
      return res.json(products);
    } catch (e) {
      next(e);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const product = await ProductModel.findById(req.params.id);
      if (!product) {
        throw ApiError.BadRequest("Product Not Found");
      }
      await product.remove();
      return res.json({ msg: "Product removed" });
    } catch (e) {
      next(e);
    }
  }

  async getProductByID(req, res, next) {
    try {
      const product = await ProductModel.findById(req.params.id);
      if (!product) {
        throw ApiError.BadRequest("Product Not Found");
      }
      return res.json(product);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProductController();
