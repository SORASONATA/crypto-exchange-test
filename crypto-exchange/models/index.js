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
db.Trade = require("./trade")(sequelize, Sequelize);
db.CryptoTransfer = require("./cryptoTransfer")(sequelize, Sequelize);
db.Transaction = require("./transaction")(sequelize, Sequelize);

// USER - WALLET
db.User.hasMany(db.Wallet, { foreignKey: "user_id" });
db.Wallet.belongsTo(db.User, { foreignKey: "user_id" });

// CURRENCY - WALLET
db.Currency.hasMany(db.Wallet, { foreignKey: "currency_id" });
db.Wallet.belongsTo(db.Currency, { foreignKey: "currency_id" });

// USER - ORDER
db.User.hasMany(db.Order, { foreignKey: "user_id" });
db.Order.belongsTo(db.User, { foreignKey: "user_id" });

// ORDER - TRADE
db.Order.hasMany(db.Trade, { foreignKey: "buy_order_id" });
db.Order.hasMany(db.Trade, { foreignKey: "sell_order_id" });

// WALLET - TRANSACTION
db.Wallet.hasMany(db.Transaction, { foreignKey: "wallet_id" });
db.Transaction.belongsTo(db.Wallet, { foreignKey: "wallet_id" });

//ORDER - CURRENCY
db.Currency.hasMany(db.Order, {foreignKey: "crypto_currency_id",});
db.Order.belongsTo(db.Currency, {foreignKey: "crypto_currency_id",as: "cryptoCurrency",});

module.exports = db;