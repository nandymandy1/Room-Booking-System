const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

// Hotel Schema
const HotelSchema = mongoose.Schema({
    hotel_name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact_num: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact_email: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    contact_person: {
        type: String,
        required: true
    },
    numberOfRooms: {
        one_b: {
            type: Number,
            default: 0
        },
        two_b: {
            type: Number,
            default: 0
        },
        three_b: {
            type: Number,
            default: 0
        },
        vila: {
            type: Number,
            default: 0
        }
    },
    numberOfRoomsAvailable: {
        one_b: {
            type: Number,
            default: 0
        },
        two_b: {
            type: Number,
            default: 0
        },
        three_b: {
            type: Number,
            default: 0
        },
        vila: {
            type: Number,
            default: 0
        }
    },
    price_room: {
        one_b: {
            type: Number,
            default: 0
        },
        two_b: {
            type: Number,
            default: 0
        },
        three_b: {
            type: Number,
            default: 0
        },
        vila: {
            type: Number,
            default: 0
        }
    },
    black_list: {
        type: Boolean,
        default: false
    },
    black_list_date: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: false
    }
});

HotelSchema.plugin(uniqueValidator);

const Hotel = module.exports = mongoose.model('Hotel', HotelSchema);

// Create Hotel and hash the password
module.exports.addHotel = function (newHotel, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newHotel.password, salt, (err, hash) => {
            if (err) throw err;
            newHotel.password = hash;
            newHotel.save(callback);
        });
    });
}

// Compare the password
module.exports.comparePassword = function (hotelPassword, hash, callback) {
    bcrypt.compare(hotelPassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

// finding by id
module.exports.getHotelById = function (id, callback) {
    Hotel.findOne({
        _id: id
    }).then(hotel => {
        callback(null, hotel);
    }).catch(err => {
        callback(true, err)
    });
}

// finding by hotel username
module.exports.getHotelByUsername = function (username, callback) {
    const query = {
        username: username
    }
    Hotel.findOne(query, callback);
}

// finding by hotel name
module.exports.getHotelByName = function (hotel_name, callback) {
    const query = {
        hotel_name: hotel_name
    }
    Hotel.findOne(query, callback);
}

// Get list of all hotels by city
module.exports.getHotelByCity = function (city, callback) {
    const query = {
        $and: [{
            city: city
        }, {
            black_list: false
        }]
    }
    Hotel.find(query, callback);
}

// Get the total booking cost
module.exports.getPriceAndDecreaseTheRoomAvailability = function (id, numberOfDays, room_type, callback) {
    Hotel.findOne({
            _id: id
        })
        .then(hotel => {
            let cost = 0;
            if (room_type == 'vila') {
                cost = hotel.price_room.vila;
                hotel.numberOfRoomsAvailable.vila--;
            }
            if (room_type == 'one_b') {
                cost = hotel.price_room.one_b;
                hotel.numberOfRoomsAvailable.one_b--;
            }
            if (room_type == 'two_b') {
                cost = hotel.price_room.two_b;
                hotel.numberOfRoomsAvailable.two_b--;
            }
            if (room_type == 'three_b') {
                cost = hotel.price_room.three_b;
                hotel.numberOfRoomsAvailable.three_b--;
            }
            hotel.save();
            cost = cost * numberOfDays;
            callback(null, cost);
        });
}

// After booking cancelation or checkout increase the number of available rooms
module.exports.increaseTheNumberOfRooms = function (id, room_type, callback) {
    Hotel.findOne({
            _id: id
        })
        .then(hotel => {
            if (room_type == 'vila') {
                hotel.numberOfRoomsAvailable.vila++;
            }
            if (room_type == 'one_b') {
                hotel.numberOfRoomsAvailable.one_b++;
            }
            if (room_type == 'two_b') {
                hotel.numberOfRoomsAvailable.two_b++;
            }
            if (room_type == 'three_b') {
                hotel.numberOfRoomsAvailable.three_b++;
            }
            hotel.save();
            callback(null, true);
        });
}