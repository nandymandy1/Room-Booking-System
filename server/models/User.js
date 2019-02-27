const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
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
    contact_num:{
        type: String,
        required: true
    }
});

// Initiate the unique validator
UserSchema.plugin(uniqueValidator);

const User = module.exports = mongoose.model('User', UserSchema);

// Finging the user from the database

// finding by id
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

// finding by username
module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username: username
    }
    User.findOne(query, callback);
}

// Create user and hash the password
module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// Compare the password
module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}