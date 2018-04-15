const router = require("express").Router();
const productController = require("../../controllers/productController");

// Matches with "/api/articles"
router.route("/")
  .get(productController.findAll)
  .post(productController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(productController.findById)
  .put(productController.update)
  .delete(productController.remove);

router
  .route("/cat/:category")
  .get(productController.findByCategory);
  // .put(productController.update)
  // .delete(productController.remove);
module.exports = router;
