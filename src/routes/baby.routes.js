const express = require("express");
const router = express.Router();
const babyController = require("../controllers/baby.controller");

router.post("/", babyController.createBaby);
router.get("/", babyController.getBabies);
router.get("/:id", babyController.getBabyById);

module.exports = router;
