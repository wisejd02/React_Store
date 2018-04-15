const router = require("express").Router();
// const userRoutes = require("./users");
const userRoutes = require("./products");

// Users routes
//router.use("/users", userRoutes);
router.use("/products", userRoutes);
module.exports = router;
