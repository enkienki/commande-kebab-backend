const finishedOrder = require("../models/finishedOrderModel");

const sendFinishedOrder = (req, res) => {
  const query = new finishedOrder(req.body);
  query.save((err, doc) => {
    if (err) return res.json({ success: false, error: err });
    res.send(`new finished-order inserted`);
  });
};

module.exports = sendFinishedOrder;
