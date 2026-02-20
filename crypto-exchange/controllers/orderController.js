const db = require("../models");

exports.createOrder = async (req, res) => {
  const order = await db.Order.create(req.body);
  res.json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await db.Order.findAll({
    include: db.User,
  });
  res.json(orders);
};