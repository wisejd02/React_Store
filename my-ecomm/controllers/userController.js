const models = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
      models.User.findAll()
          .then((result) => {res.send(result)})
      .catch(err => res.send(err))
  },
  findById: function(req, res) {

  },
  create: function(req, res) {
    models.User.create({firstName: req.body.firstName, lastName: req.body.lastName, password: req.body.password})
      .then(() => {
        res.send("success");
      })
      .catch((err) => {
        res.send(err);
      });
  },
  update: function(req, res) {

  },
  remove: function(req, res) {

  }
};
