const ProductModel = require("../models/productModel");

const seedCarteToDb = (carte) => {
  ProductModel.deleteMany({}, (err) => {
    err ? console.log(err) : console.log("removed product!");
    carte.map((seed) => {
      return ProductModel.create(seed, (err) => {
        err ? console.log(err) : console.log("added product");
      });
    });
  });
};

module.exports = seedCarteToDb;
