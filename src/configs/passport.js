require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8767/auth/google/callback",

  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

let userdata=null
passport.serializeUser(function(user, done) {
  userdata = user._json
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

console.log(userdata)

module.exports = passport;