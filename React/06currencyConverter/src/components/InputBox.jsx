import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "npr",
  amountDisable = false,
  currenyDisbale = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`flex flex-col md:flex-row ${className}`}>
      <div className="w-full md:w-1/2 md:pr-2">
        <label
          htmlFor={amountInputId}
          className="label"
        >
          {label}
        </label>
        <div className="input-field-container">
          <input
            id={amountInputId}
            className="amount-input"
            type="number"
            placeholder="Enter amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-3 md:mt-0">
        <label className="label">Currency Type</label>
        <div className="select-container">
          <select
            className="currency-select"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currenyDisbale}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
