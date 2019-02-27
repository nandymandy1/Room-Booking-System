const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Hotel = require('../models/Hotel');
const config = require("../config/database");
const Booking = require('../models/Booking');


// Register
router.post("/register", (req, res, next) => {
    let newHotel = new Hotel({
        hotel_name: req.body.hotel_name,
        city: req.body.city,
        address: req.body.address,
        contact_num: req.body.contact_num,
        username: req.body.username,
        password: req.body.password,
        contact_email: req.body.contact_email,
        contact_person: req.body.contact_person
    });

    Hotel.addHotel(newHotel, (err, hotel) => {
        if (err) {
            let message = "";
            if (err.errors.username) message = "Username is already taken. ";
            if (err.errors.email) message += "Email already in use.";
            return res.json({
                success: true,
                message
            });
        } else {

            hotel.numberOfRooms.one_b = hotel.numberOfRoomsAvailable.one_b = parseInt(req.body.one_b);
            hotel.numberOfRooms.two_b = hotel.numberOfRoomsAvailable.two_b = parseInt(req.body.two_b);
            hotel.numberOfRooms.three_b = hotel.numberOfRoomsAvailable.three_b = parseInt(req.body.three_b);
            hotel.numberOfRooms.vila = hotel.numberOfRoomsAvailable.vila = parseInt(req.body.vila);

            hotel.price_room.one_b = parseInt(req.body.cost_one_b);
            hotel.price_room.two_b = parseInt(req.body.cost_two_b);
            hotel.price_room.three_b = parseInt(req.body.cost_three_b);
            hotel.price_room.vila = parseInt(req.body.cost_vila);

            // Updating the number of rooms of the hotel
            hotel.save().then(hotel => {
                return res.json({
                    hotel,
                    success: true,
                    msg: "Hotel Registeration is Successful"
                });
            });
        }
    });
});

// Authenticate
router.post("/login", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    Hotel.getHotelByUsername(username, (err, hotel) => {
        if (err) throw err;
        if (!hotel) {
            return res.json({
                success: false,
                msg: "Hotel not found"
            });
        }
        Hotel.comparePassword(password, hotel.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({
                        type: "hotel",
                        data: {
                            id: hotel._id,
                            username: hotel.username,
                            name: hotel.hotel_name,
                            email: hotel.contact_email,
                            contact: hotel.contact_num,
                            city: hotel.city
                        }
                    },
                    config.secret, {
                        expiresIn: 604800 // 1 week
                    }
                );
                return res.json({
                    success: true,
                    token: "JWT " + token,
                    hotel: {
                        id: hotel._id,
                        username: hotel.username,
                        name: hotel.hotel_name,
                        email: hotel.contact_email,
                        contact: hotel.contact_num,
                        city: hotel.city
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

// Get Hotel Profile
router.get("/profile", passport.authenticate("jwt", {
    session: false
}), (req, res, next) => {
    res.json({
        hotel: req.user
    });
});

// Get all the hotels from the database 
router.get('/get-all-hotels-list', (req, res) => {
    Hotel.find({
        black_list: false
    }).then(hotels => {
        return res.json(hotels);
    });
});

// Get all the hotels by city name
router.get('/get-hotels-list/:city', (req, res) => {
    let city = req.params.city;
    // Convert the first letter of the string to Uppercase
    city = city.toLowerCase();
    city = city.charAt(0).toUpperCase() + city.slice(1);
    Hotel.getHotelByCity(city, (err, hotels) => {
        return res.json(hotels);
    })
});

// View the Particular Hotel
router.get('/profile/:id', (req, res) => {
    const id = req.params.id
    Hotel.getHotelById(id, (err, hotel) => {
        return res.json(hotel);
    });
});

// Update the prices route only for the authenticated Hotel Management
router.put('/update-prices', passport.authenticate("jwt", {
    session: false
}), (req, res, next) => {
    let id = req.user._id;
    Hotel.findOne(id).then(hotel => {
        hotel.price_room.one_b = parseInt(req.body.cost_one_b);
        hotel.price_room.two_b = parseInt(req.body.cost_two_b);
        hotel.price_room.three_b = parseInt(req.body.cost_three_b);
        hotel.price_room.vila = parseInt(req.body.cost_vila);
        hotel.save().then(hotel => {
            return res.json({
                message: "Prices Updated Successfully.",
                success: true,
                hotel: hotel
            });
        });
    });
});

// View all the bookings of authenticated hotel
router.get('/bookings',
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        Booking.find({
            hotel_id: req.user._id
        }).then(bookings => {
            return res.json(bookings);
        });
    }
)

module.exports = router;