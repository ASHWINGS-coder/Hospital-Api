const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
//const passportJWT = require('./config/passport-jwt.js');
const db = require('./config/mongoose')
// initializing express
const app = express();
// using parser and encoder
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

// using passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/',require('./routes/index') );

// listening to server
app.listen(3000,(err) => {
    if(err){
        console.log('Error in running server',err);
    }

    console.log('Server is up and running on port 3000')

})

