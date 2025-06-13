import { useState, useEffect } from "react";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [country, setCountry] = useState("usd");
  const [rate, setRate] = useState("");

  // Fetch list of currencies when app loads
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
      .then((response) => response.json())
      .then((data) => {
        const currencyList = Object.keys(data.usd);
        setCurrencies(currencyList);
      });
  }, []);

  const fetchCurrency = () => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
      .then((response) => response.json())
      .then((data) => {
        setRate(data.usd[country]); // Get rate for selected country
      });
  };

  return (
    <>
      <h1 className="text-3xl text-center font-bold p-2">
        Welcome to Currency Converter
      </h1>
      <div className=" h-full">
        <div>
          <input
            type="text"
            placeholder="current rate"
            readOnly={true}
            value={rate}
            className="bg-amber-500 text-2xl rounded-sm text-black border-none outline-none text-center py-1"
          />
          <br />
          <br />
          <select
            className="bg-amber-500 text-2xl rounded-sm text-black border-none outline-none text-center py-1"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Currency</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button
            onClick={fetchCurrency}
            className="border p-2 rounded-lg bg-green-200 text-black hover:cursor-pointer"
          >
            Fetch Rate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
