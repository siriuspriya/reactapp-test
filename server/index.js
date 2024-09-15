const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Node.js server!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
