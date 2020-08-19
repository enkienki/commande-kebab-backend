const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  order: {
    type: Array,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
});

const order = mongoose.model("order", OrderSchema, "orders");

module.exports = order;
