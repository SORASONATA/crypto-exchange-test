const db = require("../models");

exports.getUsers = async (req, res) => {
  const users = await db.User.findAll({
    include: {
      model: db.Wallet,
      include: db.Currency,
    },
  });
  res.json(users);
};