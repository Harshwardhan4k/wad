const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({ message: "Error getting users" })
    }
})

router.get('/profile/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the user in the database by user ID
    const user = await User.findById(userId);

    if (!user) {
      // User not found
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user data' });
  }
});

module.exports = router;
