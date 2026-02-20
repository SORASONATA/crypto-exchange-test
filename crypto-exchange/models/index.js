const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Currency = require("./currency")(sequelize, Sequelize);
db.Wallet = require("./wallet")(sequelize, Sequelize);
db.Order = require("./order")(sequelize, Sequelize);

// relationships
db.User.hasMany(db.Wallet);
db.Wallet.belongsTo(db.User);

db.Currency.hasMany(db.Wallet);
db.Wallet.belongsTo(db.Currency);

db.User.hasMany(db.Order);
db.Order.belongsTo(db.User);

module.exports = db;