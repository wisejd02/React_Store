'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    Product: DataTypes.STRING,
    ProductDescr: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    Options: DataTypes.STRING,
    inventory: DataTypes.INTEGER,
    category: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};