// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use static files
app.use(express.static('public'));

// Load comments
const comments = require('./comments.json');

// API to get all comments
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

