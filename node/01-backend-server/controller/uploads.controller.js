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

  // Exist file
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      ok: true,
      msg: "No files were uploaded.",
    });
  }

  // Process image

  res.status(200).json({
    ok: true,
    msg: "file uploaded",
  });
};

module.exports = {
  fileUpload,
};
