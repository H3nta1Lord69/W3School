require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/config");

// Create server
const app = express();

// CORS
app.use(cors());

// Database
dbConnection();

// Routes
app.use("/api/users", require("./routes/users.routes"));
// app.get("/api/users", (req, res) => {
//   res.status(200).json({
//     ok: true,
//     users: [
//       {
//         id: 123,
//         name: "Carl",
//       },
//     ],
//   });
// });

// Server running on 8080 port
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
