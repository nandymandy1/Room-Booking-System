const mongoose = require('mongoose');
const Hotel = require('./Hotel');

const BookingSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    hotel_id: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0
    },
    from_date: {
        type: Date,
        required: true
    },
    to_date: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    booking_status: {
        type: Boolean,
        default: true
    },
    checkout_status: {
        type: Boolean,
        default: false
    }
});

const Booking = module.exports = mongoose.model('Booking', BookingSchema);

// Cancel Booking
module.exports.cancelBooking = function (id, callback) {
    Booking.findById(id).then(booking => {
        booking.booking_status = false;
        // Increase the number of the available rooms in hotel
        Hotel.increaseTheNumberOfRooms(booking.hotel_id, booking.room_type, (err, status) => {
            if (status) {
                booking.save();
                callback(null, true);
            }
        });
    });
}

// After User's Checkout
module.exports.checkoutUser = function (id, callback) {
    Booking.findById(id).then(booking => {
        booking.checkout_status = true;
        Hotel.increaseTheNumberOfRooms(booking.hotel_id, booking.room_type, (err, status) => {
            if (status) {
                booking.save();
                callback(null, true);
            }
        });
    });
}