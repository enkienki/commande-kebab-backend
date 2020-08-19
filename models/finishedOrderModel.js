const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FinishedOrderSchema = new Schema({
  order: {
    type: Array,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
});

const finishedOrder = mongoose.model("finished-order", FinishedOrderSchema);

module.exports = finishedOrder;
