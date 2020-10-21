const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  initial: {
    type: String,
  },
  bestseller: {
    type: Boolean,
  },
});

const product = mongoose.model("product", ProductSchema);

module.exports = product;
