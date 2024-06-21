const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('inventory', inventorySchema);
