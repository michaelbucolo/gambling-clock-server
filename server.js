require('dotenv').config();
const express = require('express');
const fs = require('fs');
const { generateResults } = require('./game');

const app = express();
const PORT = process.env.PORT || 8080;

let currentResults = generateResults();

function updateResults() {
  currentResults = generateResults();
  fs.writeFileSync('./results/latest.json', JSON.stringify({ timestamp: Date.now(), results: currentResults }));
  console.log("Updated:", currentResults);
}

app.get('/api/second', (req, res) => {
  res.send(currentResults);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  updateResults();
  setInterval(updateResults, 1000);
});
