const fs = require("fs");

const User = require("../models/users");
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");

const deleteImage = (path) => {
  if (fs.existsSync(path)) {
    // Delete old image
    fs.unlinkSync(path);
  }
};

const updateImage = async (type, id, nameFile) => {
  let oldPath = "";
  switch (type) {
    case "hospitals":
      const hospital = await Hospital.findById(id);
      if (!hospital) {
        console.log(`Hospital doesn't exists`);
        return false;
      }

      oldPath = `./uploads/hospitals/${hospital.img}`;
      deleteImage(oldPath);

      hospital.img = nameFile;
      await hospital.save();
      return true;
      break;

    case "doctors":
      const doctor = await Doctor.findById(id);
      if (!doctor) {
        console.log(`Doctor doesn't exists`);
        return false;
      }

      oldPath = `./uploads/doctors/${doctor.img}`;
      deleteImage(oldPath);

      doctor.img = nameFile;
      await doctor.save();
      return true;
      break;

    case "users":
      const user = await User.findById(id);
      if (!user) {
        console.log(`User doesn't exists`);
        return false;
      }

      oldPath = `./uploads/users/${user.img}`;
      deleteImage(oldPath);

      user.img = nameFile;
      await user.save();
      return true;
      break;

    default:
      break;
  }
};

module.exports = {
  updateImage,
};
