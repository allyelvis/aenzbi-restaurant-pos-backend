const mongoose = require('mongoose');

const tablesSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('tables', tablesSchema);
