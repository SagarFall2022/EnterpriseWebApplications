module.exports = app => {
  const doctors = require("../controllers/doctor.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", doctors.create);

  // Retrieve all Tutorials
  router.get("/", doctors.findAll);

  // Retrieve all published Tutorials
  router.get("/published", doctors.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", doctors.findOne);

  // Update a Tutorial with id
  router.put("/:id", doctors.update);

  // Delete a Tutorial with id
  router.delete("/:id", doctors.delete);

  // Create a new Tutorial
  router.delete("/", doctors.deleteAll);

  app.use("/api/doctors", router);
};
