'use strict';

const { product} = require('./data');

var controllers = {
  //to get product
  product: async (req, res) => {
    await res.json(product)
  },

  //get product variant by id 
  getVariant: async (req, res,next) => {
      const variantById = await product.variants.find(p => (p.variant_id==req.params.variantid && p.title == req.params.title))
      if(!variantById){
        var err = new Error("Something went wrong");
        next(err)
      }
    res.json(variantById)  
  }
  
};

module.exports = controllers;