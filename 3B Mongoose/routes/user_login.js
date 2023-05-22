const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database by email
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      // User not found or password incorrect
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});

module.exports = router;
