const { v4: uuidv4 } = require("uuid");

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
  const file = req.files.image;

  const shortName = file.name.split(".");
  const fileExtension = shortName[shortName.length - 1];

  // Valid extensions
  const validExtensions = ["png", "jpg", "jpeg", "gif"];
  if (!validExtensions.includes(fileExtension)) {
    return res.status(400).json({
      ok: false,
      msg: "image type must be: png, jpg, jpeg or gif",
    });
  }

  // Generate file name
  const nameFile = `${uuidv4()}.${fileExtension}`;

  // Path on save
  const path = `./uploads/${type}/${nameFile}`;

  // Move selected image to the correspondent folder
  file.mv(path, (err) => {
    if (err) {
      console.log(err);
      return res.staus(500).json({
        ok: false,
        msg: "Error uploading the image",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "File uploaded correctly",
      nameFile,
    });
  });
};

module.exports = {
  fileUpload,
};
