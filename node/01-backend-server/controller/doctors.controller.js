const Doctor = require("../models/doctor");

const getDoctors = async (req, res) => {
  const doctors = await Doctor.find()
    .populate("user", "name img")
    .populate("hospital", "name img");

  res.json({
    ok: true,
    doctors,
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

const updateDoctors = async (req, res) => {
  const id = req.params.id;
  const uid = req.uid;

  try {
    const doctor = await Doctor.findById(id);

    if (!doctor) {
      res.status(404).json({
        ok: true,
        msg: "We can't find the doctor",
      });
    }

    const changes = {
      ...req.body,
      user: uid,
    };

    const updatedDoctor = await Doctor.findByIdAndUpdate(id, changes, {
      new: true,
    });

    res.json({
      ok: true,
      doctor: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      ok: true,
      msg: "Contact an administrator",
      error,
    });
  }
};

const deleteDoctors = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id);

    if (!doctor) {
      res.status(404).json({
        ok: true,
        msg: "We can't find the doctor",
      });
    }

    await Doctor.findByIdAndDelete(id);

    res.json({
      ok: true,
      msg: "Doctor deleted",
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
  getDoctors,
  createDoctors,
  updateDoctors,
  deleteDoctors,
};
