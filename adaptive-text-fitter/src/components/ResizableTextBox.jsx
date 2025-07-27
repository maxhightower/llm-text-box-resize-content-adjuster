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

      try {
        const response = await fetch('http://localhost:3001/api/rewrite', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, targetTokens: estimatedTokens }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch from backend');
        }

        const data = await response.json();
        setText(data.rewritten);
      } catch (error) {
        console.error('Rewrite failed:', error.message);
        alert('There was an error rewriting your text.');
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
