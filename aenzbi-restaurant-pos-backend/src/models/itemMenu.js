const mongoose = require('mongoose');

const itemMenuSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('itemMenu', itemMenuSchema);
