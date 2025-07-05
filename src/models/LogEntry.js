const mongoose = require('mongoose');

const logEntrySchema = new mongoose.Schema({
  service: { type: String, required: true },
  level: { type: String, enum: ['info', 'warn', 'error'], default: 'info' },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  metadata: { type: Object }
});

module.exports = mongoose.model('LogEntry', logEntrySchema);
