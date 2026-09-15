const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

const cartData = {};

// الحصول على السلة
router.get('/', protect, (req, res) => {
  const userId = req.user._id.toString();
  const cart = cartData[userId] || { items: [], total: 0 };
  res.json(cart);
});

// إضافة إلى السلة
router.post('/add', protect, (req, res) => {
  try {
    const userId = req.user._id.toString();
    const { productId, quantity, price } = req.body;

    if (!cartData[userId]) {
      cartData[userId] = { items: [], total: 0 };
    }

    const existingItem = cartData[userId].items.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartData[userId].items.push({ productId, quantity, price });
    }

    cartData[userId].total = cartData[userId].items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    res.json(cartData[userId]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// إزالة من السلة
router.post('/remove', protect, (req, res) => {
  try {
    const userId = req.user._id.toString();
    const { productId } = req.body;

    if (cartData[userId]) {
      cartData[userId].items = cartData[userId].items.filter(item => item.productId !== productId);
      cartData[userId].total = cartData[userId].items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    res.json(cartData[userId]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
