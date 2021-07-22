'use strict';

var controller = require('./controller');

module.exports = function (app) {
   app.route('/ugc/:productid')
      .get(controller.getContent);
};
