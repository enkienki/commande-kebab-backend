const order = require("../models/orderModel");

const deleteOrder = (req, res) => {
  order.findByIdAndDelete(req.body.id._id, (err, doc) => {
    if (err) return res.json({ success: false, error: err });
    res.send(`order deleted`);
  });
};

module.exports = deleteOrder;
