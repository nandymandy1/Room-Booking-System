const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require('../models/Admin');
const config = require("../config/database");
const Hotel = require('../models/Hotel');
const Booking = require('../models/Booking');

// Register
router.post("/register", (req, res, next) => {
    let newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        contact_num: req.body.contact
    });

    Admin.addAdmin(newAdmin, (err, user) => {
        if (err) {
            let message = "";
            if (err.errors.username) message = "Username is already taken. ";
            if (err.errors.email) message += "Email already in use.";
            return res.json({
                success: true,
                message
            });
        } else {
            return res.json({
                success: true,
                msg: "Admin Registeration is Successful"
            });
        }
    });
});

// Authenticate
router.post("/login", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.getAdminByUsername(username, (err, admin) => {
        if (err) throw err;
        if (!admin) {
            return res.json({
                success: false,
                msg: "Admin not found"
            });
        }

        Admin.comparePassword(password, admin.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({
                        type: "admin",
                        data: {
                            id: admin._id,
                            username: admin.username,
                            name: admin.name,
                            email: admin.email,
                            contact: admin.contact_num
                        }
                    },
                    config.secret, {
                        expiresIn: 604800 // 1 week
                    }
                );
                res.json({
                    success: true,
                    token: "JWT " + token,
                    admin: {
                        id: admin._id,
                        name: admin.name,
                        username: admin.username,
                        email: admin.email,
                        contact: admin.contact_num
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: "Wrong password"
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
            admin: req.user
        });
    }
);

// GET ALL THE BOOKINGS
router.get('/bookings',
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        Booking.find().then(bookings => {
            return res.json(bookings);
        });
    }
);

// Block Hotel
router.get('/blacklist-hotel/:id',
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        hotel = Hotel.findById(req.params.id).then(hotel => {
            hotel.black_list = true;
            hotel.black_list_date = Date.now();
            hotel.save().then(hotel => {
                return res.json({
                    message: "Hotel Blocked successfully.",
                    success: true
                })
            })
        }).catch(err => {
            return res.json({
                message: "Unable to block the hotel please try again later.",
                success: false
            });
        })
    }
);

// Get all the Blocked Hotels
router.get('/black-listed-hotels',
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        hotel = Hotel.find({
            black_list: true
        }).then(hotels => {
            return res.json({
                hotels: hotels,
                success: true
            })
        }).catch(err => {
            return res.json({
                message: "Unable to get black listed the hotels please try again later.",
                success: false
            });
        })
    }
)

// Unblock Hotel
router.get('/unblock-hotel/:id',
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        hotel = Hotel.findById(req.params.id).then(hotel => {
            hotel.black_list = false;
            hotel.black_list_date = Date.now();
            hotel.save().then(hotel => {
                return res.json({
                    message: "Hotel Unblocked successfully.",
                    success: true
                })
            })
        }).catch(err => {
            return res.json({
                message: "Unable to unblock the hotel please try again later.",
                success: false
            });
        })
    })


module.exports = router;