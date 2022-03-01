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

const updateHospitals = async (req, res) => {
  const id = req.params.id;
  const uid = req.uid;

  try {
    const hospital = await Hospital.findById(id);

    if (!hospital) {
      res.status(404).json({
        ok: true,
        msg: "We can't find the hospital",
      });
    }

    const changes = {
      ...req.body,
      user: uid,
    };

    const updatedHospital = await Hospital.findByIdAndUpdate(id, changes, {
      new: true,
    });

    res.json({
      ok: true,
      hospital: updatedHospital,
    });
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "Contact an administrator",
      error,
    });
  }
};

const deleteHospitals = async (req, res) => {
  const id = req.params.id;

  try {
    const hospital = await Hospital.findById(id);

    if (!hospital) {
      res.status(404).json({
        ok: true,
        msg: "We can't find the hospital",
      });
    }

    await Hospital.findByIdAndDelete(id);

    res.json({
      ok: true,
      msg: "Hospital deleted",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Contact an administrator",
      error,
    });
  }
};

module.exports = {
  getHospitals,
  createHospitals,
  updateHospitals,
  deleteHospitals,
};
