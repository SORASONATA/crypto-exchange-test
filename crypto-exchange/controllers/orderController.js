const db = require("../models");

exports.getOrders = async (req, res) => {
  try {
    const orders = await db.Order.findAll({
      include: [
        {
          model: db.User,
          attributes: ["id", "name", "email"], 
        },
        {
          model: db.Currency,
          as: "cryptoCurrency",
          attributes: ["currency_name"],
        },
      ],
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};