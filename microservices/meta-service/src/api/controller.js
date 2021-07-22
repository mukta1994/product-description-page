'use strict';

const metadata = [{
    pid:1,
    page_title: "Adidas shoes",
    description:"adidas sports shoes for men help you perform your best and are designed to meet the demands of each unique sport.",
    keywords: "Sports Shoes",
  }]


var controllers = {
  getMetadatas: async(req,res,next) => {
    if(!metadata){
        var err = new Error("Something went wrong");
        next(err)
      }
     return await res.json(metadata)
  },
  getMetadata: async (req, res, next) => {
      if(!metadata){
        var err = new Error("Something went wrong");
        next(err)
      }
     return await res.json(metadata.find(p=> p.pid==req.params.productid));
     // await res.json(content) req.params.productid
  }
  
};

module.exports = controllers;