const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

// SIGNUP - GET
// router.get("/signup", userController.renderSignupForm);

// SIGNUP - POST
// router.post("/signup", wrapAsync(userController.signup));

// LOGIN - GET
// router.get("/login", userController.renderLoginForm);

// LOGIN - POST
// router.post(
//   "/login",
//   saveRedirectUrl,
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     failureFlash: true,
//   }),
//   wrapAsync(userController.login)
// );

// LOGOUT
router.get("/logout", userController.logout);

module.exports = router;
