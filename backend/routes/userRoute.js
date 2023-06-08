const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/userController");

// post information from frontend to backend
router.post("/register", registerUser)

// whenever we make request to /register,  registerUser function will get fired

module.exports = router;