const express = require("express");
const PORT = process.env.PORT ?? 3001;
const userRoutes = require("./routes/userRoutes");
const app = express();
const db = require("./db/models");

//Por defecto recibe json en el body
app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`La app inicio en el puerto ${PORT}.`);
  //db.sequelize.sync({ force: true });
});
