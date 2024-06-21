const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  // Define schema
}, { timestamps: true });

module.exports = mongoose.model('users', usersSchema);
