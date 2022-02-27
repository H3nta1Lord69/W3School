const fs = require("fs");

const User = require("../models/users");
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");

const updateImage = async (type, id, nameFile) => {
  switch (type) {
    case "hospitals":
      break;

    case "doctors":
      const doctor = await Doctor.findById(id);
      if (!doctor) {
        console.log(`Doctor doesn't exists`);
        return false;
      }

      const oldPath = `./uploads/doctors/${doctor.img}`;
      if (fs.existsSync(oldPath)) {
        // Delete old image
        fs.unlinkSync(oldPath);
      }

      doctor.img = nameFile;
      await doctor.save();
      return true;
      break;

    case "users":
      break;

    default:
      break;
  }
};

module.exports = {
  updateImage,
};
