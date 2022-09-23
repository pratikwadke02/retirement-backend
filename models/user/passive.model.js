// currentMonthlyPassiveIncome: {
//     type: DataTypes.STRING,
//   },
//   fixedMonthlyPassiveIncomeAfterRetirement: {
//     type: DataTypes.STRING,
//   },
//   expectedGrowthRateofPassiveIncome: {
//     type: DataTypes.STRING,
//   },
//   expectedInvestmentRate: {
//     type: DataTypes.STRING,
//   },

module.exports = (sequelize, DataTypes) => {
  const Passive = sequelize.define("passive", {
    currentMonthlyPassiveIncome: {
      type: DataTypes.STRING,
    },
    fixedMonthlyPassiveIncomeAfterRetirement: {
      type: DataTypes.STRING,
    },
    expectedGrowthRateofPassiveIncome: {
      type: DataTypes.STRING,
    },
    expectedInvestmentRate: {
      type: DataTypes.STRING,
    },
    retirementCorpus: {
      type: DataTypes.STRING,
    },
  });
  return Passive;
};
