const mongoose = require('mongoose');

const taxesSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('taxes', taxesSchema);
