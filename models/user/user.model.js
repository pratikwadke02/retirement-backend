module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    e_mail: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    news_letter: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.STRING,
    },
    retireAge: {
      type: DataTypes.STRING,
    },
    currentExpense: {
      type: DataTypes.STRING,
    },
    inflation: {
      type: DataTypes.STRING,
    },
  });
  return User;
};
