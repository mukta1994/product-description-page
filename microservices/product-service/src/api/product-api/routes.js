'use strict';

var controller = require('./controller');
var requireAuthentication = require('../../index');


module.exports = function (app) {
   app.route('/product')
      .get(requireAuthentication,controller.product);
   app.route('/product/:productid/:variantid/:title')
      .get(requireAuthentication,controller.getVariant)

};


