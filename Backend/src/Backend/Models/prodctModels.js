const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter The Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Price"],
    maxLength: [6, "Price Cannot Exceed Six Charecter"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Category"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter The Product Stock"],
    maxLength: [4, "Product Stock Cannot Exceed 4 Charecters"],
    default: 1,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  Reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comments: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
