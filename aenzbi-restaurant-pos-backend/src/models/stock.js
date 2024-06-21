const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('stock', stockSchema);
