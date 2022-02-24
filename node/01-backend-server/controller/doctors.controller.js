const Doctor = require("../models/doctor");

const getDoctors = (req, res) => {
  res.json({
    ok: true,
    msg: "getDoctors",
  });
};

const createDoctors = async (req, res) => {
  const uid = req.uid;
  const doctor = new Doctor({ user: uid, ...req.body });

  try {
    const doctorDB = await doctor.save();
    res.json({
      ok: true,
      doctor: doctorDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Talk with an administrator",
    });
  }
};

const updateDoctors = (req, res) => {
  res.json({
    ok: true,
    msg: "updateDoctors",
  });
};

const deleteDoctors = (req, res) => {
  res.json({
    ok: true,
    msg: "deleteDoctors",
  });
};

module.exports = {
  getDoctors,
  createDoctors,
  updateDoctors,
  deleteDoctors,
};
