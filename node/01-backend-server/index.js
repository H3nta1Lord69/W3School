const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

// Create server
const app = express();

// Database
dbConnection();

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    ok: true,
    msg: "Holiwi",
  });
});

// Server running on 8080 port
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
