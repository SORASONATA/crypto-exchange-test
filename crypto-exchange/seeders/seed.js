const db = require("../models");

async function seed() {
  await db.sequelize.sync({ force: true });

  const user = await db.User.create({
    name: "Test User",
    email: "test@test.com",
    password: "1234",
  });

  const btc = await db.Currency.create({
    currency_name: "BTC",
    currency_type: "CRYPTO",
  });

  const thb = await db.Currency.create({
    currency_name: "THB",
    currency_type: "FIAT",
  });

  await db.Wallet.create({
    balance: 1,
    UserId: user.id,
    CurrencyId: btc.id,
  });

  await db.Wallet.create({
    balance: 100000,
    UserId: user.id,
    CurrencyId: thb.id,
  });

  console.log("Seed data created");
}

seed();