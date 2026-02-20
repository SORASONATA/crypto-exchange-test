module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Trade", {
    trade_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    buy_order_id: DataTypes.INTEGER,
    sell_order_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    trade_time: DataTypes.DATE,
  }, { timestamps: false });
};