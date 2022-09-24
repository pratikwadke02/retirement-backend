const express = require("express");
const router = express.Router();

const { getUsers } = require("../controllers/admin/admin.controller");

router.get("/getUsers", getUsers);

module.exports = router;
