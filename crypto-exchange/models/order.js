module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Order", {
    order_type: DataTypes.STRING, 
    price: DataTypes.FLOAT,
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING,
  });
};