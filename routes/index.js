const express = require("express");
const router = express.Router();

// Home / Landing Page
router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
