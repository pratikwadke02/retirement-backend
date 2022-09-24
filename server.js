require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const dataRoutes = require("./routes/data.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

var corsOptions = {
  origin: "*",
};

const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Database is synced");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server Deployed");
  res.json({ message: "Welcome" });
});

app.use("/api/user", userRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
