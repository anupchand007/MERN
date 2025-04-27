import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setallowNum] = useState(false);
  const [allowChar, setallowChar] = useState(false);
  const [password, setPassword] = useState("");
  

  //ref hook
  const passwordCopy = useRef()

  const copyPassword = useCallback(() => {
    passwordCopy.current?.select();
    passwordCopy.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password)
  }, [password] )

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
    <>
      <div className="w-screen mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex border-2 shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordCopy}

          />

          <button onClick={copyPassword}>Copy</button>
        </div>
        <div>
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowNum}
              id="numberInput"
              onClick={() => {
                setallowNum((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowChar}
              id="numberInput"
              onClick={() => {
                setallowChar((prev) => !prev);
              }}
            />
            <label>Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
