require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logRoutes = require('./routes/logs');

const app = express();
const PORT = process.env.PORT || 3023;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected to log-service'))
  .catch(err => console.error('❌ DB connection error:', err));

app.get('/', (req, res) => res.send('Log Service running'));

app.use('/api/v1/logs', logRoutes);

app.listen(PORT, () => {
  console.log(`📄 Log Service running on port ${PORT}`);
});
