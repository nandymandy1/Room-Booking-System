const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// Bring in passport for authentication
const passport = require('passport');

// Bring in path Module
const path = require('path');

// Initialize the app
const app = express();

db = require('./config/database').database;


// Database connection
mongoose.set('useCreateIndex', true)
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connected to the database " + db);
    })
    .catch(err => console.log(err));

// Defining the PORT
const PORT = process.env.PORT || 5000;

// Initializing the middlewares
// Cors middlewares
app.use(cors());
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// Bodyparser middleware
app.use(bodyParser.json());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// Custom middleware for the role based authentication on the basis of requested url
const checkUserType = function (req, res, next) {
    switch (req.originalUrl.split('/')[2]) {
        case "users":
            require('./config/passport').user(passport);
            break;

        case "admin":
            require('./config/passport').admin(passport);
            break;

        case "hotels":
            require('./config/passport').hotel(passport);
            break;
    }
    next();
}

app.use(checkUserType);

// Defining the Routes
// app.get('/', (req, res) => {
//     res.json({
//         message: "Hello world"
//     });
// });

// Bring in Admin Routes
const users = require('./routes/users');
// User Routes
app.use('/api/users', users);

// Bring in Hotel Routes
const hotels = require('./routes/hotels');
// Hotel Routes
app.use('/api/hotels', hotels);

// Bring in Admin Routes
const admins = require('./routes/admin');
app.use('/api/admin', admins);

// Send the index.html page by default
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server on the prt
app.listen(PORT, () => {
    console.log("Server stared on port : " + PORT);
});