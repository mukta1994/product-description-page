'use strict';

const { content} = require('./data');

var controllers = {
  //get user generated content by product id
  getContent: async (req, res, next) => {
      if(!content){
        var err = new Error("Something went wrong");
        next(err)
      }
     return await res.json(content.find(p=> p.product_id==req.params.productid));
  }
  
};

module.exports = controllers;