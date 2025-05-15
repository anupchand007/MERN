import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setIsLoading(true);
    // Simulate API call with a small delay for better UX
    setTimeout(() => {
      setConvertedAmount(amount * currencyInfo[to]);
      setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    // Auto convert on initial load
    if (amount > 0) convert();
  }, []);

  return (
    <div
      className="currency-container"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <div className="converter-card">
        <div className="app-title">
          <h1>Currency Converter</h1>
          <p>Convert currencies in real-time</p>
        </div>
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="input-container">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="swap-button-container">
            <button
              type="button"
              className="swap-button"
              onClick={swap}
            >
              ⇄
            </button>
          </div>
          <div className="input-container">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className={`convert-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Converting...' : `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
