const Product = require("../Models/prodctModels");
const ErrorHandler = require("../Utils/ErrorHandler");
const catchAsyncError = require("../Middleware/catchAsyncError");
//create product --Admin

exports.createProduct = catchAsyncError(async (req, res, next) => {
  req.user.body = req.user.id;
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//Get all products

exports.getAllProduct = catchAsyncError(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});
// Update product -Admin
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }

  await Product.remove();

  res.status(200).json({
    success: true,
    message: "Product Deleted Sucessfully",
  });
});

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Create review and update review

exports.createReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body.user;
  const review = {
    user: req.body._Id,
    name: req.user.name,
    comment: req.body.comment,
    rating: Number(rating),
  };
  const product = await Product.findById(productId);

  const isReviwed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._Id
  );

  if (isReviwed) {
    product.review.forEach((rev) => {
      if ((rev) => rev.user.toString() === req.user._Id) {
        (rev.comment = comment), (rev.rating = rating);
      }
    });
  } else {
    product.reviews.push(review);
    product.noOfReviews = product.reviews.length;
  }
  let avg = 0;
  product.ratings =
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    }) / product.reviews.length;
  await Product.save({ validateBeforeSave: true });
  res.status(200).json({
    success: true,
  });
});

exports.getProductReviews = async (req, res, next) => {
  const product = Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product Reviews Found", 404));
  }
  const reviews = product.reviews;

  res.status(200).json({
    success: true,
    reviews,
  });
};

// Delete Product Review

exports.deleteReview = catchAsyncError(async (req, res, next) => {
  const product = Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  const reviews = product.filter(
    (rev) => rev._id.toString() !== req.query._id.toString()
  );
  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  const rating = avg / reviews.length;
  const noOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      rating,
      noOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
