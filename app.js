const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pet_hotel",
  connectionLimit: 10,
});

// Import the correct variable name from db.js
const db = require("./db");

const adminRoutes = require("./admins/routes");
const doctorsRegesterRoutes = require("./doctorsRegester/route");
const feedbackRoutes = require("./feedback/route");
const petRoutes = require("./pets/routes");
const resetPassword = require("./resetPassword/route");
const UserRegesterRoutes = require("./UserRegester/route");
const vaccineRoutes=require('./vaccine/Routes')


app.use("/admins", adminRoutes);
app.use("/doctorsRegester", doctorsRegesterRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/pets", petRoutes);
app.use("/resetPassword", resetPassword);
app.use("/UserRegester", UserRegesterRoutes);
app.use("/vaccine", vaccineRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
