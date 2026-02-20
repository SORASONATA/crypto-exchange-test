module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Transaction", {
    transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    wallet_id: DataTypes.INTEGER,
    transaction_type: DataTypes.STRING, // TRADE, TRANSFER
    amount: DataTypes.DECIMAL,
    created_at: DataTypes.DATE,
  }, { timestamps: false });
};