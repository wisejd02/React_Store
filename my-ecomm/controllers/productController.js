const models = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
      models.Products.findAll()
          .then((result) => {res.send(result)})
      .catch(err => res.send(err))
  },
  findById: function(req, res) {
    models.Products.findAll({ 
      where: {
        id: req.params.id
      }
    })
          .then((result) => {res.send(result)})
      .catch(err => res.send(err))
  },
  findByCategory: function(req, res) {
    console.log(req.params);
    models.Products.findAll({ 
      where: {
        Category: req.params.category
      }
    })
          .then((result) => {res.send(result)})
      .catch(err => res.send(err))
  },
  create: function(req, res) {
    models.Products.create({firstName: req.body.firstName, lastName: req.body.lastName, password: req.body.password})
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
