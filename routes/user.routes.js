const express = require("express");
const router = express.Router();

const {
  create,
  login,
  getUser,
} = require("../controllers/user/user.controller");

router.post("/", create);
router.post("/login", login);
router.get("/:id", getUser);

module.exports = router;
