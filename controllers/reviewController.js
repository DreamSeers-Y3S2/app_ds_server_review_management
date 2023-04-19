const Review = require("../models/reviewModel");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");


const getReviews = asyncHandler(async (req, res) => {
  const review = await Review.find();
  res.json(review);
});


const createReview = asyncHandler(async (req, res) => {
  const {
    product,
    email,
    reviewName,
    reviewTittle,
    reviewDescription,
    rating,
  } = req.body;

  
const products = await Product.findOne({_id: product });
  console.log(products);

  if (
    !product ||
    !email ||
    !reviewName ||
    !reviewTittle ||
    !reviewDescription ||
    !rating
  ) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    
  } else {
    const review = new Review({
      product,
      email,
      reviewName,
      reviewTittle,
      reviewDescription,
      rating,
    });
    
    const createReview = await review.save();

    res.status(201).json(createReview);
      console.log(req.body);
  }
});





const getCustomerReviewsById = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ message: "Reviews Details not Found" });
  }
});

module.exports = {
  createReview,
  getReviews,
  // updateReviews,
  // deleteReviews,
  // approveReviewByAdmin,
  getCustomerReviewsById,
};
