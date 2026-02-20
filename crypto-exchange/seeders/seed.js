const db = require("../models");

async function seed() {
  await db.sequelize.sync({ force: true });

  //USERS
  const user1 = await db.User.create({
    name: "Alice",
    email: "alice@test.com",
    password: "1234",
  });

  const user2 = await db.User.create({
    name: "Bob",
    email: "bob@test.com",
    password: "1234",
  });

  //CURRENCIES 
  const btc = await db.Currency.create({
    currency_name: "BTC",
    currency_type: "CRYPTO",
  });

  const thb = await db.Currency.create({
    currency_name: "THB",
    currency_type: "FIAT",
  });

  //WALLETS 
  const aliceBtcWallet = await db.Wallet.create({
    user_id: user1.id,        
    currency_id: btc.id,
    balance: 1.5,
  });

  const aliceThbWallet = await db.Wallet.create({
    user_id: user1.id,
    currency_id: thb.id,
    balance: 500000,
  });

  const bobBtcWallet = await db.Wallet.create({
    user_id: user2.id,
    currency_id: btc.id,
    balance: 0.2,
  });

  const bobThbWallet = await db.Wallet.create({
    user_id: user2.id,
    currency_id: thb.id,
    balance: 200000,
  });

  //ORDERS 
  const buyOrder = await db.Order.create({
    user_id: user1.id,
    crypto_currency_id: btc.id,
    order_type: "BUY",
    price: 2000000,
    amount: 0.1,
    status: "OPEN",
  });

  const sellOrder = await db.Order.create({
    user_id: user2.id,
    crypto_currency_id: btc.id,
    order_type: "SELL",
    price: 2000000,
    amount: 0.1,
    status: "OPEN",
  });

  //TRADE 
  await db.Trade.create({
    buy_order_id: buyOrder.id,    
    sell_order_id: sellOrder.id,
    amount: 0.1,
    price: 2000000,
    trade_time: new Date(),
  });

  // CRYPTO_TRANSFER(internal)
  await db.CryptoTransfer.create({
    sender_wallet_id: bobBtcWallet.id,
    receiver_wallet_id: aliceBtcWallet.id,
    external_address: null,
    amount: 0.05,
    created_at: new Date(),
  });

  //TRANSACTIONS
  await db.Transaction.create({
    wallet_id: aliceBtcWallet.id,
    transaction_type: "TRADE",
    amount: 0.1,
    created_at: new Date(),
  });

  await db.Transaction.create({
    wallet_id: bobBtcWallet.id,
    transaction_type: "TRANSFER",
    amount: -0.05,
    created_at: new Date(),
  });

  console.log(" Seed data created successfully");
}

seed();