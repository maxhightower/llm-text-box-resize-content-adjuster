import React from 'react';
import ResizableTextBox from './/components/ResizableTextBox';
import './App.css';

function App() {
  return (
    <div style={{ height: "100vh", background: "#1e1e1e", color: "#f3f3f3" , width: "100vw"}}>
      <header
        style={{
          textAlign: "center",
          //padding: "20px 0",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
          Adaptive Text Fitter MVP
        </h1>
        <p style={{ marginTop: "10px", fontSize: "1rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.6" }}>
          This UI element can adjust the text of your message to best fit the size of the box—not by changing font size, but by adapting the content using smart rewriting. 
        </p>
        <p style={{ marginTop: "10px", fontSize: "1rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.6", color: "#b4e6adff" }}>
          Try typing a message and resizing the box to see how it could work.
        </p>
      </header>

      <main
        style={{
          height: "calc(100vh - 80px)", // remaining space below header
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ResizableTextBox />
      </main>

    </div>
  );
}

export default App;