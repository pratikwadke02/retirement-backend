const jwt = require("jsonwebtoken");
const db = require("../../models");
const User = db.user;

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
