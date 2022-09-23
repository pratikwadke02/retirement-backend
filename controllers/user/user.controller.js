const jwt = require("jsonwebtoken");
const db = require("../../models");
const User = db.user;

exports.create = async (req, res) => {
  try {
    let pass = req.body.name.split(" ")[0] + req.body.mobile;

    if (!req.body) {
      res.status(400).send({
        message: "Content cannot be empty",
      });
    } else {
      const user = await User.findOne({
        where: {
          e_mail: req.body.e_mail,
        },
      });

      if (user) {
        res.status(400).send({ message: "User already exists" });
      } else {
        await User.create({
          ...req.body,
          password: pass,
        });

        const token = jwt.sign(
          { e_mail: req.body.e_mail, id: req.body.id },
          process.env.JWT_SECRET_KEY
        );

        res.send({ message: "User created successfully", token: token });
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty",
      });
    } else {
      const { e_mail, password } = req.body;

      const user = await User.findOne({
        where: {
          e_mail: e_mail,
        },
      });

      if (!user) {
        return res.status(400).send("Invalid credentials");
      }

      if (req.body.password !== password) {
        return res.status(400).send("Invalid password");
      } else {
        const token = jwt.sign(
          { e_mail: user.email, id: user.id },
          process.env.JWT_SECRET_KEY
        );

        res.send({
          message: "User logged in successfully",
          token: token,
        });
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      res.status(400).send({
        message: "User not found",
      });
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
