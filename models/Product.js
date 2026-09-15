const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'يرجى إدخال اسم المنتج'],
  },
  description: {
    type: String,
    required: [true, 'يرجى إدخال وصف المنتج'],
  },
  price: {
    type: Number,
    required: [true, 'يرجى إدخال السعر'],
  },
  category: {
    type: String,
    required: [true, 'يرجى إدخال الفئة'],
  },
  image: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  reviews: [
    {
      user: mongoose.Schema.Types.ObjectId,
      comment: String,
      rating: Number,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', productSchema);
