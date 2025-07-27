const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
  console.log('Received rewrite request:', req.body);
  const { text, targetTokens } = req.body;
  // Simple rewrite: truncate or pad text to simulate rewriting
  let rewritten = text;
  if (text.length > targetTokens) {
    rewritten = text.slice(0, targetTokens) + '...';
  } else if (text.length < targetTokens) {
    rewritten = text + ' '.repeat(targetTokens - text.length);
  }
  res.json({ rewritten });
});

module.exports = router;