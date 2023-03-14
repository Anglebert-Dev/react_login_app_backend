require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },(accessToken, refreshToken, profile, done)=> {
    done(null,profile)
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})

//alternatives


// passport.use(new GoogleStrategy({
//     clientID:process.env.GOOGLE_CLIENT_ID,
//     clientSecret:process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     done(null,profile)
//   }
// ));

// passport.serializeUser((user,done)=>{
//     done(null,user)
// })

// passport.deserializeUser((user,done)=>{
//     done(null,user)
// })

// module.exports = function(req, res, next) {
//   passport.authenticate('google', function(err, user, info) {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.redirect('/login');
//     }
//     if (req.sessionID !== user.sessionID) {
//       req.session.regenerate((err) => {
//         if (err) {
//           console.error('Failed to regenerate session ID:', err);
//           return done(err);
//         }
//         req.session.passport = { user: user };
//         done(null, user);
//       });
//     } else {
//       done(null, user);
//     }
//   })(req, res, next);
// };
