const User = require("../models/users");
const Hospital = require("../models/hospital");
const Doctor = require("../models/doctor");

// General search
const getAllData = async (req, res) => {
  const search = req.params.search;
  const regexp = new RegExp(search, "i");

  const [users, hospitals, doctors] = await Promise.all([
    User.find({
      name: regexp,
    }),
    Hospital.find({
      name: regexp,
    }),
    Doctor.find({
      name: regexp,
    }),
  ]);

  res.status(200).json({
    ok: true,
    users,
    hospitals,
    doctors,
  });
};

// Get specific search
const getCollectionData = async (req, res) => {
  const search = req.params.search;
  const regexp = new RegExp(search, "i");

  const [users, hospitals, doctors] = await Promise.all([
    User.find({
      name: regexp,
    }),
    Hospital.find({
      name: regexp,
    }),
    Doctor.find({
      name: regexp,
    }),
  ]);

  res.status(200).json({
    ok: true,
    users,
    hospitals,
    doctors,
  });
};

module.exports = {
  getAllData,
  getCollectionData,
};
