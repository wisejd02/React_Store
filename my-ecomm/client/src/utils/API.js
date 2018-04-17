import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getAllProducts: function() {
    console.log(axios.get("/api/products/"));
    return axios.get("/api/products/");

  },
  getSelectedProduct: function(prod) {
    // alert(prod);
    // http://localhost:3001/api/products/:Drinks
    return axios.get("/api/products/cat/" + prod );
  },
  getSelectedItem: function(id) {
    return axios.get("/api/products/"+id);
  }
};
