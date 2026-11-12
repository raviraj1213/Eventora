
const express = require('express');
const router = express.Router();
const { bookEvent, confirmBooking, getMyBookings, cancelBooking, sendBookingOTP } = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/auth');
console.log("========== DEBUG ==========");

console.log("protect:", typeof protect);
console.log("admin:", typeof admin);

console.log("sendBookingOTP:", typeof sendBookingOTP);
console.log("bookEvent:", typeof bookEvent);
console.log("confirmBooking:", typeof confirmBooking);
console.log("getMyBookings:", typeof getMyBookings);
console.log("cancelBooking:", typeof cancelBooking);

console.log("===========================");

router.post('/send-otp', protect, sendBookingOTP);
router.post('/', protect, bookEvent);
router.put('/:id/confirm', protect, admin, confirmBooking);
router.get('/my', protect, getMyBookings);
router.delete('/:id', protect, cancelBooking);

module.exports = router;