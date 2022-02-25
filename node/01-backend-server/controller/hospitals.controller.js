const Hospital = require("../models/hospital");

const getHospitals = async (req, res) => {
  const hospitals = await Hospital.find().populate("user", "name img");

  res.json({
    ok: true,
    hospitals,
  });
};

const createHospitals = async (req, res) => {
  const uid = req.uid;
  const hospital = new Hospital({ user: uid, ...req.body });

  try {
    const hospitalDB = await hospital.save();

    res.json({
      ok: true,
      hospital: hospitalDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Talk with an administrator",
    });
  }
};

const updateHospitals = (req, res) => {
  res.json({
    ok: true,
    msg: "updateHospitals",
  });
};

const deleteHospitals = (req, res) => {
  res.json({
    ok: true,
    msg: "deleteHospitals",
  });
};

module.exports = {
  getHospitals,
  createHospitals,
  updateHospitals,
  deleteHospitals,
};
