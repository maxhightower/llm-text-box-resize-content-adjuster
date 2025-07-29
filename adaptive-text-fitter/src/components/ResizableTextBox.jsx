import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';

export default function ResizableTextBox() {
  const [text, setText] = useState('Your message goes here...');
  const [boxSize, setBoxSize] = useState({ width: 259, height: 50 });

  useEffect(() => {
    // TODO: Estimate tokens and call backend
    //autoResize();
  }, [boxSize, text]);
const handleRewrite = async () => {
  const estimatedTokens = Math.round((boxSize.width * boxSize.height) / 20);

  // Debug: Check if API key is loaded
  //console.log('API Key exists:', !!process.env.REACT_APP_OPENAI_API_KEY);
  //console.log('API Key starts with sk-:', process.env.REACT_APP_OPENAI_API_KEY?.startsWith('sk-'));
  console.log('API KEY:', process.env.REACT_APP_OPENAI_API_KEY); // Should NOT be undefined

  try {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `Rewrite the following message so it fits within approximately ${estimatedTokens} tokens, preserving the main idea:`,
          },
          {
            role: "user",
            content: text,
          },
        ],
        max_tokens: estimatedTokens,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const rewritten = data.choices[0].message.content.trim();
    setText(rewritten);
  } catch (error) {
    console.error('Rewrite failed:', error);
    alert(`There was an error rewriting your text: ${error.message}`);
  }
};

  return (
    <div style={{ width: '100%', height: '100%' }}>
    <Rnd
      className="ai-shimmer-border"
      size={boxSize}
      minWidth={180}   // Set your minimum width (including padding)
      minHeight={55}   // Set your minimum height (including padding)
      onResizeStop={(e, dir, ref, delta, position) => {
        setBoxSize({ width: ref.offsetWidth, height: ref.offsetHeight });
      }}
      style={{ //border: '1px solid gray', 
        paddingTop: '8px', paddingBottom: '8px', paddingLeft: '8px', paddingRight: '8px', boxSizing: 'border-box' }}
    >
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          //autoResize();
        }}
        style={{
          width: '100%',
          height: '100%',
          //minHeight: '30px',
          //minWidth: '150px',
          //height: 'auto',
          //width: 'auto',
          resize: 'none',
          overflow: 'hidden',
          userSelect: 'text', // <-- ensures text selection is enabled
          WebkitUserSelect: 'text', // for Safari
          boxSizing: 'border-box', // ensures padding is included in width/height calculations
        }}
      />
    </Rnd>
    <button
      onClick={handleRewrite}
      style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
      }}> 
      Rewrite
    </button> 
  </div>
  );
}
