import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setallowNum] = useState(false);
  const [allowChar, setallowChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  
  //ref hook
  const passwordCopy = useRef()

  const copyPassword = useCallback(() => {
    passwordCopy.current?.select();
    passwordCopy.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [password])

  //useCallback store the cache 
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTYUVWXYZabcdefghijklmnopqurstuvwxyz";
    if (allowNum) {
      str += "0123456789";
    }
    if (allowChar) {
      str += "!@#$%^&*(){}_+";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, allowChar, allowNum, setPassword]);

  //useEffect run the function if the found changes in its dependencies
  useEffect(()=>{
    passwordGenerator()
  }, [length, allowNum, allowChar, passwordGenerator])

  return (
    <div className="container">
      <h1 className="title">Password Generator</h1>
      
      <div className="password-display">
        <input
          type="text"
          value={password}
          className="password-input"
          placeholder="Your secure password"
          readOnly
          ref={passwordCopy}
        />
        <button 
          className="copy-btn" 
          onClick={copyPassword}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      
      <div className="options">
        <div className="option-item">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            className="slider"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="option-label">Length: {length}</label>
        </div>
        
        <div className="option-item">
          <input
            type="checkbox"
            className="checkbox"
            checked={allowNum}
            id="numberInput"
            onChange={() => {
              setallowNum((prev) => !prev);
            }}
          />
          <label className="option-label" htmlFor="numberInput">Include Numbers</label>
        </div>
        
        <div className="option-item">
          <input
            type="checkbox"
            className="checkbox"
            checked={allowChar}
            id="charInput"
            onChange={() => {
              setallowChar((prev) => !prev);
            }}
          />
          <label className="option-label" htmlFor="charInput">Include Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
