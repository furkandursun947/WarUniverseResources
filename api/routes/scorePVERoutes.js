const express = require("express");
const router = express.Router();


const scorePVEController = require('../controllers/scorePVE.controller');


// Handling incoming requests to /npcs

router.get("/", scorePVEController.scorePVE_get_all);

router.get("/:id", scorePVEController.scorePVE_get_one);

router.post("/", scorePVEController.scorePVE_add_one);

router.patch("/:id", scorePVEController.scorePVE_update_one);

router.delete("/:id", scorePVEController.scorePVE_delete_one);


module.exports = router;