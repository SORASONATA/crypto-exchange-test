const db = require("../models");

exports.getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      include: [
        {
          model: db.Wallet,
          include: [
            {
              model: db.Currency,
              attributes: ["currency_name", "currency_type"],
            },
          ],
        },
      ],
    });

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};