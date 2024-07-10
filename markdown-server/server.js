const express = require('express');
const  { marked } = require('marked');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle Markdown to HTML conversion
app.post('/convert', (req, res) => {
  const { markdown } = req.body;

  if (!markdown) {
    return res.status(400).json({ error: 'Markdown content is required' });
  }

  // Convert Markdown to HTML using marked library
  const html = marked(markdown);

  res.json({ html });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
