const express = require('express');
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { User } = require("./database"); // Import User model

const PORT = 5500;

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Static files
app.use(express.static(path.join(__dirname, '../')));

//Routes
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.get('/role', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../role.html'));
});
app.get('/budget', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../budget.html'));
});
app.get('/user_dashboard', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../user_dashboard.html'));
});

// API route to add a user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// API route to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

//Server starting
app.listen(PORT, ()=> {
    console.log("Server running...");
});