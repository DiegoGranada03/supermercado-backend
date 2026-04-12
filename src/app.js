const express = require("express");
const sequelize = require("./config/database");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const providerRoutes = require("./routes/providerRoutes");

const Product = require("./models/Product");
const Provider = require("./models/Provider");

// RELACION
Provider.hasMany(Product, { foreignKey: "providerId" });
Product.belongsTo(Provider, { foreignKey: "providerId" });

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/providers", providerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API funcionando" });
});

sequelize.sync()
  .then(() => {
    console.log("Base de datos sincronizada");

    app.listen(3000, () => {
      console.log("Servidor corriendo en puerto 3000");
    });
  })
  .catch((err) => {
    console.error("Error", err);
  });