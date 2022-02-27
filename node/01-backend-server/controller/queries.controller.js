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
  const table = req.params.table;
  const search = req.params.search;
  const regexp = new RegExp(search, "i");

  let data = [];

  switch (table) {
    case "doctors":
      data = await Doctor.find({ name: regexp })
        .populate("user", "name img")
        .populate("hospital", "name img");
      break;

    case "hospitals":
      data = await Hospital.find({ name: regexp }).populate("user", "name img");
      break;

    case "users":
      data = await User.find({ name: regexp });
      break;

    default:
      return res.status(404).json({
        ok: false,
        msg: "Not found.",
      });
  }

  res.status(200).json({
    ok: true,
    collection: data,
  });
};

module.exports = {
  getAllData,
  getCollectionData,
};
