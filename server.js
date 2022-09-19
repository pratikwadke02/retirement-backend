const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./app/routes/user.routes.js")(app);
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
  res.send('Server Deployed');
  res.json({ message: "Welcome" });
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});