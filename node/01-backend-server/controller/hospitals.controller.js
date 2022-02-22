const getHospitals = (req, res) => {
  res.json({
    ok: true,
    msg: "getHospitals",
  });
};

const createHospitals = (req, res) => {
  res.json({
    ok: true,
    msg: "createHospitals",
  });
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
