const jwt = require("jsonwebtoken");
const db = require("../../models");
const Passive = db.passive;
const Home = db.dreamHome;
const Car = db.dreamCar;

exports.addPassive = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    await Passive.create({
      ...req.body,
      userId: id,
    });

    res.send({ message: "Passive data of the user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.addHome = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    // console.log(req.body);
    const id = user.id;

    await Home.create({
      ...req.body,
      userId: id,
    });

    res.send({ message: "Dream home data of the user added successfully" });
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};

exports.addCar = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    // console.log(req.body);
    const id = user.id;

    await Car.create({
      ...req.body,
      userId: id,
    });

    res.send({ message: "Dream car data of the user added successfully" });
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};
