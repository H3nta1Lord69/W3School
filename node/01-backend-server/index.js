require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/config");

// Create server
const app = express();

// CORS
app.use(cors());

// Body parser
app.use(express.json());

// Database
dbConnection();

// Public directory
app.use(express.static("public"));

// Routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/hospitals", require("./routes/hospitals.routes"));
app.use("/api/doctors", require("./routes/doctors.routes"));
app.use("/api/login", require("./routes/auth.routes"));
app.use("/api/general", require("./routes/queries.routes"));
app.use("/api/uploads", require("./routes/upload.routes"));

// Server running on 8080 port
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
