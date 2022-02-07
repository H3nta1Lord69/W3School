const express = require("express");
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
app.listen(8080, () => {
  console.log("Server running on port " + 8080);
});
