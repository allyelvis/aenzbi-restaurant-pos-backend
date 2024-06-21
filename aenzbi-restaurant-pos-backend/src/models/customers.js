const mongoose = require('mongoose');

const customersSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('customers', customersSchema);
