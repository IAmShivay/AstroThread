const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../Controllers/orderController");
const router = express.Router();

const { isAuthenticated,authorizedRoles } = require("../Middleware/auth");

router.route("/order/new").post(isAuthenticated, newOrder);

router.route("/order/:id").get(isAuthenticated, getSingleOrder);

router.route("/orders/me").get(isAuthenticated, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticated,authorizedRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticated,authorizedRoles("admin"), updateOrder)
  .delete(isAuthenticated,authorizedRoles("admin"), deleteOrder);

module.exports = router;
