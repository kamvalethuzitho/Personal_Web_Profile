// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Simulate saving the data (replace with actual database logic)
  console.log('Form submission received:', { name, email, message });

  // Send a success response
  res.status(200).json({ message: 'Thank you for your message! I will get back to you soon.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});