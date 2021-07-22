'use strict';

var controller = require('./controller');

module.exports = function (app) {
   app.route('/product')
      .get(controller.product);
   app.get('/', function (req, res,next) {
      //Create an error and pass it to the next function
      var err = new Error("Something went wrong");
      next(err);
   });
   app.route('/product/:productid/:variantid/:title')
      .get(controller.getVariant)

};


// app.use('/session', routes.session);
// app.use('/users', routes.user);
// app.use('/messages', routes.message);

