const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("../config/database");
const Hotel = require('../models/Hotel');
const Booking = require('../models/Booking');

// Register
router.post("/register", (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    contact_num: req.body.contact
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      let message = "";
      if (err.errors.username) message = "Username is already taken. ";
      if (err.errors.email) message += "Email already in use.";
      return res.json({
        success: false,
        message
      });
    } else {
      return res.json({
        success: true,
        message: "User Registeration is Successful"
      });
    }
  });
});

// Authenticate
router.post("/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({
            type: "user",
            data: {
              id: user._id,
              username: user.username,
              name: user.name,
              email: user.email,
              contact: user.contact_num
            }
          },
          config.secret, {
            expiresIn: 604800 // 1 week
          }
        );
        res.json({
          success: true,
          token: "JWT " + token,
          userType: 'user',
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            contact: user.contact_num
          }
        });
      } else {
        return res.json({
          success: false,
          message: "Wrong password"
        });
      }
    });
  });
});

/*
 * GET REQUEST TO CHECK FOR THE PROFILE FROM THE AUTHENTICATED TOKEN
 */

router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false
  }),

  (req, res, next) => {
    res.json({
      user: req.user
    });
  }
);

// Make the booking request
router.post(
  "/make-booking",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res, next) => {
    // Get the authenticated user ID
    newBooking = new Booking({
      user_id: req.user._id,
      hotel_id: req.body.hotel_id,
      room: req.body.room,
      from_date: req.body.from_date,
      to_date: req.body.to_date,
      city: req.body.city
    });

    newBooking.save().then(booking => {
      let date_to = new Date(req.body.to_date);
      let date_from = new Date(req.body.from_date);
      let timeDiff = Math.abs(date_to.getTime() - date_from.getTime());
      let numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      Hotel.getPriceAndDecreaseTheRoomAvailability(booking.hotel_id, numberOfDays, booking.room, (err, cost) => {
        booking.cost = cost;
        booking.save().then(booking => {
          res.json({
            booking: booking,
            success: true
          });
        });
      });
    });
  }
);

// View all the booking of the user
router.get('/view-bookings',
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    let id = req.user._id
    Booking.viewBooking(id, (err, bookings) => {
      return res.json({
        success: true,
        bookings: bookings
      });
    });
  }
);

// Get hotel name by booking Id's
router.get('/hotels/:id', (req, res) => {
  let id = req.params.id
  Hotel.findById(id).then(hotel => {
    return res.json(hotel.name);
  });
});

// Cancel the booking route
router.get('/cancel-booking/:id',
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    let id = req.params.id
    Booking.cancelBooking(id, (err, success) => {
      if (success) {
        return res.json({
          message: "Booking has been canceled successfully.",
          status: success
        });
      } else {
        return res.json({
          message: "Unable to cancel the booking due to technical error. Please try again later.",
          status: success
        });
      }
    });
  }
);

// Checkout the user
router.get('/checkout/:id',
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    let id = req.params.id
    Booking.checkoutUser(id, (err, success) => {
      if (success) {
        return res.json({
          message: "You have been checked out successfully.",
          status: success
        });
      } else {
        return res.json({
          message: "Unable to checkout due to some technical issues. Please try in a moment.",
          status: success
        });
      }
    });
  }
);


module.exports = router;