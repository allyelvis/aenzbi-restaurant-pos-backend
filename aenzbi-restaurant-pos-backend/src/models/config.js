const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('config', configSchema);
