/**
 * Route: api/doctors
 */

const { Router } = require("express");
const { check } = require("express-validator");
const {
  getDoctors,
  createDoctors,
  updateDoctors,
  deleteDoctors,
} = require("../controller/doctors.controller");
const { validateFields } = require("../middlewares/validate-fields");

const { validateJwt } = require("../middlewares/validate-jwt");

const router = Router();

router.get("/", getDoctors);
router.post("/", [], createDoctors);

router.put("/:id", [], updateDoctors);

router.delete("/:id", deleteDoctors);

module.exports = router;
