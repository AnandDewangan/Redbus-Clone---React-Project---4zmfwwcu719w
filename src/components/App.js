import { useState, useEffect } from "react";
import '../styles/App.css';
const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleCharLimit(event) {
    setCharLimit(event.target.value);
  }

  function handleFontSize(event) {
    setFontSize(event.target.value);
  }

  useEffect(() => {
    const inputText = inputValue.trim();
    const words = inputText.split(/\s+/).filter(word => word !== "").length;
    const chars = inputText.length;

    setWordCount(words);
    setCharCount(chars);
  }, [inputValue]);
  
  return (
    <div id="main">
      <textarea
        value={inputValue}
        onChange={handleInput}
        style={{ fontSize: `${fontSize}px` }}
      />

      <div id="word-counter">Words: {wordCount}</div>
      <div id="char-counter">Characters: {charCount}/{charLimit}</div>

      <input
        type="number"
        value={charLimit}
        onChange={handleCharLimit}
        id="char-limit-input"
      />

      <input
        type="range"
        min="16"
        max="32"
        value={fontSize}
        onChange={handleFontSize}
        id="fontSize-input"
      />
    </div>
  )
}


export default App;
