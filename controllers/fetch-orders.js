const order = require("../models/orderModel");

const fetchOrders = (req, res) => {
  const query = order;
  query.find((err, order) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, orders: order });
  });
};

module.exports = fetchOrders;
