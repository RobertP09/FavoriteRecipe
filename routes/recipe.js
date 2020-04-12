const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// @route    POST /addrecipe
// @desc     Create a recipe
// @access   Private

router.post("/addrecipe", (req, res) => {});

// @route    GET /recipes
// @desc     Get all recipes
// @access   Private

// @route    Get /recipe/:id
// @desc     Get a recipe
// @access   Private

// @route    PUT /recipe/:id
// @desc     Update a recipe
// @access   Private

// @route    DELETE /recipe/:id
// @desc     Delete a recipe
// @access   Private

module.exports = router;
