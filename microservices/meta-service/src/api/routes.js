'use strict';

var controller = require('./controller');
var requireAuthentication = require('../../../passport/passport');

module.exports = function (app) {
    app.route('/metadatas')
    .get(requireAuthentication,controller.getMetadatas);
   app.route('/metadata/:productid')
      .get(requireAuthentication,controller.getMetadataByProductId);
};