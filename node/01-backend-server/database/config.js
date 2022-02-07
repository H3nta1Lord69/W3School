const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://HL69:Baj69420@cluster0.gnmfk.mongodb.net/hospitaldb"
    );
    console.log("Db Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error during the initialization of the DB.");
  }
};

module.exports = {
  dbConnection,
};
