const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const Admin = require('../models/Admin');
const Hotel = require('../models/Hotel');
const config = require('./database');

// To authenticate the USER by JWT Strategy
module.exports.user = (passport) => {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload.data.id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}

// To authenticate the ADMIN by JWT Strategy
module.exports.admin = (passport) => {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

    Admin.getAdminById(jwt_payload.data.id, (err, admin) => {
      if (err) {
        return done(err, false);
      }
      if (admin) {
        return done(null, admin);
      } else {
        return done(null, false);
      }
    });
  }));
}

// To authenticate the HOTEL by JWT Strategy
module.exports.hotel = (passport) => {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    Hotel.getHotelById(jwt_payload.data.id, (err, hotel) => {
      if (err) {
        return done(err, false);
      }
      if (hotel) {
        return done(null, hotel);
      } else {
        return done(null, false);
      }
    });
  }));
}