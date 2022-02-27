const fileUpload = (req, res) => {
  res.status(200).json({
    ok: true,
    msg: "file uploaded",
  });
};

module.exports = {
  fileUpload,
};
