const express = require("express");
const indexController = require("./controllers/index.controller")
const productController = require("./controllers/product.controller")
const passport = require("./configs/passport");

const userController = require("./controllers/user.controller");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); 

app.use(express.static("public"));

app.use("", indexController);
app.use("", productController);
app.use("/users", userController);

const session = require('express-session');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);


app.get('/protected', isLoggedIn, (req, res) => {

  console.log(req.user.displayName,req.user.email)
  let userdata = req.user.displayName
  let useremail=req.user.email
  res.render("index", {userdata,useremail});
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

module.exports = app;
