const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


const Doctor = require("../models/doctors");


let opts = {
    jwtFormRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "blah"
}

passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    Doctor.findById(jwtPayLoad._id, function(err, doc){
        if(err){console.log("Error in finding user from JWT", err);}

        if(doc){
            return done(null, doc);
        }else{
            return done(null, false);
        }
    });

}));

module.exports = passport; 