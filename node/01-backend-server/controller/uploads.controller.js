const fileUpload = (req, res) => {
  const type = req.params.type;
  const id = req.params.id;

  const validateType = ["hospitals", "doctors", "users"];

  if (!validateType.includes(type)) {
    return res.status(400).json({
      ok: true,
      msg: "Invalid type",
    });
  }

  res.status(200).json({
    ok: true,
    msg: "file uploaded",
  });
};

module.exports = {
  fileUpload,
};
