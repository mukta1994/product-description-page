var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

var db = require('./db');

passport.use(new Strategy(
    function(token, cb) {
      db.users.findByToken(token, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user);
      });
    }));

module.exports = passport.authenticate('bearer', { session: false });