const ProductModel = require("../models/productModel");

const seedCarteToDb = (req, res) => {
  ProductModel.deleteMany({}, (err) => {
    err ? console.log(err) : console.log("removed product!");
    const query = req.body;
    query.map((seed) => {
      return ProductModel.create(seed, (err) => {
        err ? console.log(err) : console.log("added product");
      });
    });
    res.send("new carte added");
  });
};

module.exports = seedCarteToDb;
