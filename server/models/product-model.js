const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  brand: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
  },
  nicotine: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },

  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = Post = model("Product", ProductSchema);
