const express = require("express");
const router = express.Router();


const npcsController = require('../controllers/npc.controller');


// Handling incoming requests to /npcs


router.get("/", npcsController.npcs_get_all);

router.get("/:id", npcsController.npcs_get_one);

router.post("/", npcsController.npcs_add_one);

router.patch("/:id", npcsController.npcs_update_one);

router.delete("/:id", npcsController.npcs_delete_one);


module.exports = router;