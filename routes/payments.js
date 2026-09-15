const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');
const { protect } = require('../middleware/auth');

// معالجة الدفع
router.post('/process', protect, async (req, res) => {
  try {
    const { amount, orderId, token } = req.body;

    const charge = await stripe.charges.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      source: token,
      description: `الطلب رقم: ${orderId}`,
    });

    if (charge.status === 'succeeded') {
      await Order.findByIdAndUpdate(orderId, {
        paymentStatus: 'completed',
        paymentId: charge.id,
        status: 'processing',
      });

      res.json({
        success: true,
        message: 'تمت معالجة الدفع بنجاح',
        chargeId: charge.id,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
