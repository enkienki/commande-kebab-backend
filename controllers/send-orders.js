const order = require("../models/orderModel");

const sendOrder = (req, res) => {
  const query = new order(req.body);
  query.save((err, doc) => {
    if (err) return res.json({ success: false, error: err });
    res.send(`new order inserted`);
  });
};

module.exports = sendOrder;
