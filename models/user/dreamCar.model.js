module.exports = (sequelize, DataTypes) => {
  const DreamCar = sequelize.define("dreamCar", {
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
  return DreamCar;
};
