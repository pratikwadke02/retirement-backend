const dbConfig = require("../config/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// User
db.user = require("./user/user.model")(sequelize, DataTypes);
db.passive = require("./user/passive.model")(sequelize, DataTypes);
db.dreamHome = require("./user/dreamHome.model")(sequelize, DataTypes);
db.dreamCar = require("./user/dreamCar.model")(sequelize, DataTypes);

db.user.hasOne(db.passive);
db.passive.belongsTo(db.user);

db.user.hasOne(db.dreamHome);
db.dreamHome.belongsTo(db.user);

db.user.hasOne(db.dreamCar);
db.dreamCar.belongsTo(db.user);

module.exports = db;
