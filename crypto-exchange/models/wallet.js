module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Wallet", {
    balance: DataTypes.FLOAT,
  });
};