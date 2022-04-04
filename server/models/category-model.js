const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = Category = model("Category", CategorySchema);
