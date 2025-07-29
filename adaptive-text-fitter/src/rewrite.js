const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Set this in your environment
});

router.post('/', async (req, res) => {
  const { text, targetTokens } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-4" if you have access
      messages: [
        {
          role: "system",
          content: `Rewrite the following message so it fits within approximately ${targetTokens} tokens, preserving the main idea:`,
        },
        {
          role: "user",
          content: text,
        },
      ],
      max_tokens: targetTokens,
      temperature: 0.7,
    });

    const rewritten = completion.choices[0].message.content.trim();
    res.json({ rewritten });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to rewrite text.' });
  }
});

module.exports = router;