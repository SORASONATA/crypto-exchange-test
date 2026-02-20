module.exports = (sequelize, DataTypes) => {
  return sequelize.define("CryptoTransfer", {
    transfer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sender_wallet_id: DataTypes.INTEGER,
    receiver_wallet_id: DataTypes.INTEGER,
    external_address: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    created_at: DataTypes.DATE,
  }, { timestamps: false });
};