# Adaptive Text Fitter

This project creates a resizable text box that uses a Large Language Model (LLM) to rewrite content so it fits into a given visual space — not by shrinking font, but by changing the wording intelligently.

## Features
- React-based resizable text box
- Backend API to rewrite text using OpenAI
- Measures box dimensions to estimate word/token capacity
- Automatically adapts text to fit space

## Stack
- Frontend: React, Tailwind (optional)
- Backend: Node.js + Express
- AI: OpenAI GPT-4 or GPT-4o API

## How It Works
1. User types a message.
2. They resize the text box.
3. App estimates how many tokens fit.
4. App calls the LLM to generate a version of the message that fits.

## Setup
Coming soon...
