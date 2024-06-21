const mongoose = require('mongoose');

const retailSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('retail', retailSchema);
