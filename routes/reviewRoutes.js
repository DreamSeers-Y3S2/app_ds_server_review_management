const express = require("express");
const { protectCustomer } = require("../middleware/authCustomerMiddleware");
const { getReviews, createReview, getCustomerReviewsById } = require("../controllers/reviewController");
const router = express.Router();

// review single User routes
router.route("/customer/review/create").post(protectCustomer, createReview);
router.route("/customer/review/get").get(protectCustomer, getReviews);
router.route("/customer/reviews/:id").get(protectCustomer, getCustomerReviewsById);

// public review routes
router.route("/review/get").get(getReviews);

module.exports = router;
