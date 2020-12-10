const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const controllers = require("../controllers/user");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");

const isAuth = require("../middleware/passport");

// router.get("/", (req, res) => {
//   res.send("hello world");
// });

// register
router.post("/register", registerRules(), validation, controllers.register);

// login
router.post("/login", loginRules(), validation, controllers.login);
// get current user
router.get("/current", isAuth(), controllers.current);

module.exports = router;
