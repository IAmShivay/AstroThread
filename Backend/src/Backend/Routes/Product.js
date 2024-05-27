const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createReview,
  getProductReviews,
  deleteReview,
} = require("../Controllers/ProductController");
const { isAuthenticated, authorizedRoles } = require("../Middleware/auth");
const router = express.Router();

router
  .route("/product")
  .get( getAllProduct);
router
  .route("/product/new")
  .post(isAuthenticated, authorizedRoles("admin"), createProduct);
router
  .route("/product/:id")
  .put(isAuthenticated, authorizedRoles("Admin"), updateProduct)
  .delete(isAuthenticated, authorizedRoles("Admin"), deleteProduct)
  .get(getSingleProduct);
router.route("/product/new").post(createProduct);
router.route("/review").put(isAuthenticated, createReview);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticated, deleteReview);
module.exports = router;
