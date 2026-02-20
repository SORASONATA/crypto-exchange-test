const express = require("express");
const db = require("./models");

const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});