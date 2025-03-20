const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', { name: String });

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.post('/user', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send(newUser);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
