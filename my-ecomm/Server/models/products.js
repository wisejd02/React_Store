'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    Product: DataTypes.STRING,
    ProductDescr: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    Options_A: DataTypes.STRING,
    Options_B: DataTypes.STRING,
    Inventory: DataTypes.INTEGER,
    Category: DataTypes.STRING,
    Image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Products;
};