
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock blog posts
const posts = [
  { id: 1, title: "My Coding Journey", content: "Learning React was a game-changer for my career..." },
  { id: 2, title: "Building for the Future", content: "This portfolio showcases my passion for elegant design..." },
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
