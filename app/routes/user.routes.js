module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/", user.create);
  router.post("/login", user.login);
  router.post("/id/", user.addData);
  router.get("/:id", user.getUser);

  app.use("/api/user", router);
};
