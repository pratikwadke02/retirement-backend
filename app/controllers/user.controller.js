const User = require("../models/user.model.js");
const sql = require("../models/db.js");
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const user = new User({
    name: req.body.name,
    mobile: req.body.mobile,
    e_mail: req.body.e_mail,
    gender: req.body.gender,
    dob: req.body.dob,
    retireAge: req.body.retireAge,
    currentExpense: req.body.currentExpense,
    inflation: req.body.inflation,
    news_letter: req.body.news_letter,
  });

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else {
      res.send(data);
    }
  });
};

exports.login = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  } else {
    const { e_mail, password } = req.body;

    sql.query(
      "SELECT * FROM user WHERE e_mail = '" + e_mail + "'",
      (err, data) => {
        if (err) {
          res.send({
            error: err,
          });
        } else {
          const resultArray = Object.values(JSON.parse(JSON.stringify(data)));
          console.log(resultArray[0]);

          if (resultArray.length !== 0) {
            if (password === resultArray[0].password) {
              const token = jwt.sign(
                { e_mail: e_mail },
                process.env.JWT_SECRET_KEY
              );

              res.send({
                message: "Login successful",
                token: token,
                id: resultArray[0].id,
              });
            } else {
              res.send({
                message: "Enter correct password",
              });
            }

            //   bcrypt.compare(password, resultArray[0].password, (err, resul) => {
            //     if (err) {
            //       res.send({
            //         message: "Server error",
            //       });
            //     } else if (resul === true) {
            //       const token = jwt.sign(
            //         { e_mail: e_mail },
            //         process.env.JWT_SECRET_KEY
            //       );

            //       res.send({
            //         message: "Login successful",
            //         token: token,
            //       });
            //     } else {
            //       res.send({
            //         message: "Enter correct password",
            //       });
            //     }
            //   });
          } else {
            return res.send("No User Found");
          }
        }
      }
    );
  }
};

exports.getUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  sql.query(
    "SELECT * FROM user WHERE id = ?",
    [req.params["id"]],
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      } else {
        const resultArray = Object.values(JSON.parse(JSON.stringify(data)));
        if (resultArray.length !== 0) {
          return res.send(resultArray);
        } else {
          return res.send("No User Found");
        }
      }
    }
  );
};

exports.addData = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const currentMonthly = req.body.currentMonthly;
  const fixedMonthly = req.body.fixedMonthly;
  const expectedGrowth = req.body.expectedGrowth;
  const expectedInvestment = req.body.expectedInvestment;
  const retirementCorpus = req.body.retirementCorpus;
  const id = req.body.id;

  sql.query(
    "UPDATE user SET currentMonthlyPassiveIncome = " +
      currentMonthly +
      ", fixedMonthlyPassiveIncomeAfterRetirement = " +
      fixedMonthly +
      ",expectedGrowthRateofPassiveIncome = " +
      expectedGrowth +
      ", expectedInvestmentRate = " +
      expectedInvestment +
      ",retirementCorpus = " +
      retirementCorpus +
      "  WHERE id=" +
      id,
    (err, data) => {
      console.log(err);
      if (err) {
        res.send("failed");
      } else {
        res.send("success");
      }
    }
  );
};
