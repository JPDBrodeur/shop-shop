const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shop-shop', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
