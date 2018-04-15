'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});

    Product: DataTypes.STRING,
    ProductDescr: DataTypes.STRING,
    Price: DataTypes.FLOAT,
    Options_A: DataTypes.STRING,
    Options_B: DataTypes.STRING,
    Inventory: DataTypes.INTEGER,
    Category: DataTypes.STRING,
    Image: DataTypes.STRING
    */
   
    return queryInterface.bulkInsert('Products', [{
        id:"",
        Product: "Glass Chalice",
        ProductDescr: "Short clear glass.",
        Price: 12.00,
        Options_A: "",
        Options_B:"",
        Inventory: 12,
        Category: "Drink",
        Image:"../images/mugs/chalice glass.png",
        createdAt:"CURRENT_TIMESTAMP",
        updatedAt:"CURRENT_TIMESTAMP"
      },{
        id:"",
        Product: "Tall Mug",
        ProductDescr: "Tall rectangular mug.",
        Price: 10.00,
        Options_A: "",
        Options_B:"",
        Inventory: 10,
        Category: "Drink",
        Image:"../images/mugs/tall mug.jpeg",
        createdAt:"CURRENT_TIMESTAMP",
        updatedAt:"CURRENT_TIMESTAMP"
      },{
        id:"",
        Product: "Glass Tumbler",
        ProductDescr: "Small clear glass tumbler.",
        Price: 8.00,
        Options_A: "",
        Options_B:"",
        Inventory: 8,
        Category: "Drink",
        Image:"../images/mugs/glass tumbler.jpeg",
        createdAt:"CURRENT_TIMESTAMP",
        updatedAt:"CURRENT_TIMESTAMP"
      },{
        id:"",
        Product: "Mug",
        ProductDescr: "Tradtional mug.",
        Price: 8.00,
        Options_A: "",
        Options_B:"",
        Inventory: 6,
        Category: "Drink",
        Image:"../images/mugs/custom logo msg mug.jpeg",
        createdAt:"CURRENT_TIMESTAMP",
        updatedAt:"CURRENT_TIMESTAMP"
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   queryInterface.bulkDelete('Products', [{
    Category :'Drink'
    }])

  }
};
