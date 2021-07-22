'use strict';

var controller = require('./controller');
var requireAuthentication = require('../../index');


module.exports = function (app) {
   app.route('/product')
      .get(requireAuthentication,controller.product);
   app.get('/', function (req, res,next) {
      //Create an error and pass it to the next function
      var err = new Error("Something went wrong");
      next(err);
   });
   app.route('/product/:productid/:variantid/:title')
      .get(requireAuthentication,controller.getVariant)

};


