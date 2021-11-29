const express = require("express");
const router = express.Router();


const userController = require('../controllers/user.controller');


// Handling incoming requests to /npcs


router.get("/", userController.get_all_users);

router.get("/:id", userController.get_one_user);

router.patch("/:id", userController.update_user);

router.delete("/:id", userController.delete_user);

module.exports = router;