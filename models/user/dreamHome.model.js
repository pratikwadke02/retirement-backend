module.exports = (sequelize, DataTypes) => {
  const DreamHome = sequelize.define("dreamHome", {
    presentCost: {
      type: DataTypes.STRING,
    },
    yearToBuy: {
      type: DataTypes.STRING,
    },
    existingFund: {
      type: DataTypes.STRING,
    },
    inflation: {
      type: DataTypes.STRING,
    },
    investmentReturn: {
      type: DataTypes.STRING,
    },
    currentYearlyInvestment: {
      type: DataTypes.STRING,
    },
  });
  return DreamHome;
};
