'use strict';

var controller = require('./controller');
var requireAuthentication = require('../index');

module.exports = function (app) {
   app.route('/ugc/:productid')
      .get(requireAuthentication,controller.getContent);
};
