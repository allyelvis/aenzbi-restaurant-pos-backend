const mongoose = require('mongoose');

const suppliersSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('suppliers', suppliersSchema);
