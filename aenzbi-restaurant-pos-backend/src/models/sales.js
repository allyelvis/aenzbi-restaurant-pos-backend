const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('sales', salesSchema);
