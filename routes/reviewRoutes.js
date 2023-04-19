const express = require("express");
const { protectAdmin } = require("../middleware/authAdminMiddleware");
const {protectCustomer} =require ("../middleware/authCustomerMiddleware")
const {
  getReviews,
  createReview,
  getCustomerReviewsById,
} = require("../controllers/reviewController");
const router = express.Router();

// review Admin routes
// router.route("/admin/review/get").get(protectAdmin, getReviews);
// router
//   .route("/admin/review/approve/:id")
//   .put(protectAdmin, approveReviewByAdmin)
//   .get(protectAdmin, getCustomerReviewsById)
  

// review single User routes
router.route("/customer/review/create").post(createReview);
router.route("/customer/review/get").get(getReviews);
router
  .route("/customer/reviews/:id")
  .get(protectCustomer, getCustomerReviewsById)
 


// public review routes
router.route("/review/get").get(getReviews);

module.exports = router;




