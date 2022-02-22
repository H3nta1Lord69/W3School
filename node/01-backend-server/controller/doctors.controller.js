const getDoctors = (req, res) => {
  res.json({
    ok: true,
    msg: "getDoctors",
  });
};

const createDoctors = (req, res) => {
  res.json({
    ok: true,
    msg: "createDoctors",
  });
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
