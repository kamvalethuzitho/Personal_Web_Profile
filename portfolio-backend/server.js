const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://zithokamvalethu:<GkOQKJhoiYolSmAz>@websiteprofile.2awbu.mongodb.net/?retryWrites=true&w=majority&appName=WebsiteProfile', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for form submissions
const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Submission = mongoose.model('Submission', submissionSchema);

// Update the form submission route
app.post('/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Save the submission to the database
    const submission = new Submission({ name, email, message });
    await submission.save();

    res.status(200).json({ message: 'Thank you for your message! I will get back to you soon.' });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ error: 'Failed to save submission.' });
  }
});