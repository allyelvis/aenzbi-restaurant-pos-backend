const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('items', itemsSchema);
