'use strict';

const { metadata} = require('./data');

//to get metadatas and metadata by id
var controllers = {
  getMetadatas: async(req,res,next) => {
    if(!metadata){
        var err = new Error("Something went wrong");
        next(err)
      }
     return await res.json(metadata)
  },
  getMetadataByProductId: async (req, res, next) => {
      if(!metadata){
        var err = new Error("Something went wrong");
        next(err)
      }
      const metaDatabyId = metadata.find(p=> p.pid==req.params.productid)
      if(!metaDatabyId){
        var err = new Error("No metadata found for the specified product id");
        next(err)
      }
     return await res.json(metaDatabyId);
  }
  
};

module.exports = controllers;