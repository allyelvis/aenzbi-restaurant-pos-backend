const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('orders', ordersSchema);
