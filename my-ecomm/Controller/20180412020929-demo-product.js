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
    */
   
    return queryInterface.bulkInsert('Products', [{
        id:"",
        Product: "Glass Chalice",
        ProductDescr: "Short clear glass.",
        Price: 12.00,
        Options: "",
        inventory: 12,
        category: "Drink",
        image:"../images/mugs/custom logo msg mug.jpeg",
        createdAt:"CURRENT_TIMESTAMP",
        updatedAt:"CURRENT_TIMESTAMP"
      },{
        id:"",
        Product: "Tall Mug",
        ProductDescr: "Tall rectangular mug.",
        Price: 10.00,
        Options: "",
        inventory: 10,
        category: "Drink",
        image:"../images/mugs/custom logo msg mug.jpeg",
        createdAt:"CURRENT_TIMESTAMP",
        updatedAt:"CURRENT_TIMESTAMP"
      },{
        id:"",
        Product: "Glass Tumbler",
        ProductDescr: "Small clear glass tumbler.",
        Price: 8.00,
        Options: "",
        inventory: 8,
        category: "Drink",
        image:"../images/mugs/custom logo msg mug.jpeg",
        createdAt:"CURRENT_TIMESTAMP",
        updatedAt:"CURRENT_TIMESTAMP"
      },{
        id:"",
        Product: "Mug",
        ProductDescr: "Tradtional mug.",
        Price: 8.00,
        Options: "",
        inventory: 6,
        category: "Drink",
        image:"../images/mugs/custom logo msg mug.jpeg",
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
    category :'Drink'
    }])

  }
};
