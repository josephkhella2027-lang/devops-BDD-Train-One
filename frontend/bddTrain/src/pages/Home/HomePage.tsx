import { useState } from "react";

export default function HomePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  return (
    <div>
      <div style={{ padding: 20 }}>
        <input
          className="inputText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="inputText"
        />

        <button id="showBtn" onClick={() => setResult(text)}>
          Show
        </button>

        <h1 id="output">{result}</h1>
      </div>
      <div id="header" className="headerOne"></div>
    </div>
  );
}
