module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Currency", {
    currency_name: DataTypes.STRING,
    currency_type: DataTypes.STRING, 
  });
};