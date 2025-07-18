const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/musicapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Define a simple User model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', UserSchema);

module.exports = { User };