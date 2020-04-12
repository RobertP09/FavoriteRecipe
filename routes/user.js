const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @route    POST api/register
// @desc     Register a user
// @access   Public
router.post(
  "/",
  [
    check("username").isString().not().isEmpty(),
    check("email").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (user) res.status(400).json({ msg: "Email already exists" });

      user = User.build({
        username,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(11);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.status(200).send(user);
    } catch (error) {
      console.error("Server error: ", error);
    }
  }
);

module.exports = router;
