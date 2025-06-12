import { useState } from "react";

function App() {
  const [country, setCountry] = useState("usd");
  const [rate, setRate] = useState("0")
  const [currencyList, setCurrencyList] = useState("")

  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country}.json`;


  const fetchCountry = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCurrencyList(data[country]));
  };
  const fetchCurrency = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setRate(data));
  };
  

  return (
    <>
      <h1 className="text-3xl text-center font-bold p-2 ">
        Welcome to Currency Converter
      </h1>
      <div className=" h-full">
        <div>
          <input
            type="text"
            placeholder="current rate"
            readOnly={true}
            value={rate}
            className="bg-amber-500 text-2xl rounded-sm text-black border-none outline-none focus:border-none text-center py-1"
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="enter currency"
            className="bg-amber-500 text-2xl rounded-sm text-black border-none outline-none focus:border-none text-center py-1"
            value={currencyList}
            onChange={(e) => setCountry(e.target.value)}
          />
          <br />
          <br />
          <select name="" id="" value={currencyList}>
            <option value="Select Con">Select Country</option>
            
          </select>
          <br />
          <br />
          <button onClick={fetchCurrency || fetchCountry } 
          className="border p-2 rounded-lg bg-green-200 text-black hover:cursor-pointer">Fetch Data</button>
        </div>
      </div>
    </>
  );
}

export default App;
