const db = require("../models");
const Doctor = db.doctors;

// Create and Save a new Doctor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Doctor
  const doctor = new Doctor({
    title: req.body.doctorName,
    description: req.body.review,
    published: req.body.published ? req.body.published : false
  });

  // Save Doctor in the database
  doctor
    .save(doctor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Doctor."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Doctor.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving doctor."
      });
    });
};

// Find a single Doctor with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Doctor.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Doctor with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Doctor with id=" + id });
    });
};

// Update a Doctor by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Doctor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Doctor with id=${id}. Maybe Doctor was not found!`
        });
      } else res.send({ message: "Doctor was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Doctor with id=" + id
      });
    });
};

// Delete a Doctor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Doctor.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Doctor with id=${id}. Maybe Doctor was not found!`
        });
      } else {
        res.send({
          message: "Doctor was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Doctor with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Doctor.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Doctor.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
