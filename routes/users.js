const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const config = require("../config/database");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    address: req.body.address,
    number: req.body.number,
  });

  User.addUser(newUser, (err, user) => {
    // funkcija za dodavanje usera
    if (err) {
      res.json({ success: false, msg: "Fail to register user" });
    } else {
      res.json({ success: true, msg: "User registered" });
    }
  });
});

//Authenticate
router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }
    //ako postoji username
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ user }, config.secret, {
          expiresIn: 604800, //user se mora ponovo logovati nakon sedmicu
        });
        res.json({
          success: true,
          token: "JWT " + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            number: user.number,
          },
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
    });
  });
});

//Profile - zaštiičen tokenom
//protekcija rute: passport.authenticate("jwt", {session:false})
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
