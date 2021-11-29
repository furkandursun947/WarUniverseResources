const express = require("express");
const router = express.Router();


const authController = require('../controllers/auth.controller');


// Handling incoming requests to /npcs

// /login
router.get("/", authController.login);

// /register
router.post("/", authController.register);

module.exports = router;