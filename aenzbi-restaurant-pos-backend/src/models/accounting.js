const mongoose = require('mongoose');

const accountingSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('accounting', accountingSchema);
