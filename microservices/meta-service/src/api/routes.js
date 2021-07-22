'use strict';

var controller = require('./controller');

module.exports = function (app) {
    app.route('/metadatas')
    .get(controller.getMetadatas);
   app.route('/metadata/:productid')
      .get(controller.getMetadata);
};