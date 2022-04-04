const userService = require("../service/user-service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const ProductModel = require("../models/product-model");

class ProductController {
  async addProduct(req, res, next) {
    try {
      console.log(req.body);

      console.log(req.user);

      const newProduct = new ProductModel({
        brand: req.body.brand,
        text: req.body.text,
        volume: req.body.volume,
        nicotine: req.body.nicotine,
        price: req.body.price,
        category: req.body.category,
        picture: {
          secure_url: req.body.picture.secure_url,
          public_id: req.body.picture.public_id,
        },
      });

      const productData = await newProduct.save();

      return res.json(productData);
    } catch (e) {
      console.log(e);

      next(e);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const product = await ProductModel.findById(req.params.id);

      if (product) {
        (product.brand = req.body.brand ?? product.brand),
          (product.text = req.body.text ?? product.text),
          (product.volume = req.body.volume ?? product.volume),
          (product.nicotine = req.body.nicotine ?? product.nicotine),
          (product.price = req.body.price ?? product.price),
          (product.picture = {
            secure_url:
              req.body.picture.secure_url ?? product.picture.secure_url,
            public_id: req.body.picture.public_id ?? product.picture.public_id,
          });

        const updatedProduct = await product.save();

        return res.json(updatedProduct);
      } else {
        const product = new ProductModel({
          brand: req.body.brand,
          text: req.body.text,
          volume: req.body.volume,
          nicotine: req.body.nicotine,
          price: req.body.price,
          picture: {
            secure_url: req.body.picture.secure_url,
            public_id: req.body.picture.public_id,
          },
        });
        const updatedProduct = await product.save();

        return res.json(updatedProduct);
      }
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
