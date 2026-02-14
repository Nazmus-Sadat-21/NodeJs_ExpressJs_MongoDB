// require("dotenv").config();
// const User = require("../models/user.models")
// const JwtStrategy = require('passport-jwt').Strategy;
// const  ExtractJwt = require('passport-jwt').ExtractJwt; //extract Bearer
// const passport = require("passport")
// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.SECRET_KEY;

// const passport2 = passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({_id: jwt_payload.id}, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));

// module.exports = passport2


require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user.models");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done) => {
            try {
                // IMPORTANT: use _id, not id
                const user = await User.findOne({ _id: jwt_payload.id });

                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (err) {
                return done(err, false);
            }
        })
    );
};
