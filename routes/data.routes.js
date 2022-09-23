const express = require("express");
const router = express.Router();

const {
  addPassive,
  addHome,
  addCar,
} = require("../controllers/data/data.controller");

router.post("/passive", addPassive);
router.post("/dreamHome", addHome);
router.post("/dreamCar", addCar);

module.exports = router;
