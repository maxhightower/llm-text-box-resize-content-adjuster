import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';

export default function ResizableTextBox() {
  const [text, setText] = useState('Your message goes here...');
  const [boxSize, setBoxSize] = useState({ width: 300, height: 150 });

  useEffect(() => {
    // TODO: Estimate tokens and call backend
  }, [boxSize, text]);

  return (
    <Rnd
      size={boxSize}
      onResizeStop={(e, dir, ref, delta, position) => {
        setBoxSize({ width: ref.offsetWidth, height: ref.offsetHeight });
      }}
      style={{ border: '1px solid gray', padding: '8px' }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: '100%', resize: 'none' }}
      />
    </Rnd>
  );
}
