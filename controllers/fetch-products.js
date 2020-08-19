const Product = require("../models/productModel");

const fetchAllProducts = (req, res) => {
  Product.find()
    .sort({ _id: 1 })
    .exec((err, product) => {
      if (err)
        return res.json({
          success: false,
          error: err,
        });
      return res.json({
        success: true,
        products: product,
      });
    });
};

module.exports = fetchAllProducts;
