module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Order", {
    order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    crypto_currency_id: DataTypes.INTEGER,
    order_type: DataTypes.STRING, // BUY, SELL
    price: DataTypes.DECIMAL,
    amount: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
  }, { timestamps: false });
};