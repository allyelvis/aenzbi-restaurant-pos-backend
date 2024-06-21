const mongoose = require('mongoose');

const reportsSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('reports', reportsSchema);
