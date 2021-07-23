const express = require('express')
const helmet = require("helmet");
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

var db = require('../../db');

const app = express();
app.use(helmet());

passport.use(new Strategy(
  function(token, cb) {
    db.users.findByToken(token, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      return cb(null, user);
    });
  }));

const port = process.env.PORT || 5003

module.exports = passport.authenticate('bearer', { session: false });

var routes = require('./api/routes');

routes(app);

//middleware to handle errors
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))