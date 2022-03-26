import React from "react";
import "./CurrencyStyle.css";

const CurrencyInput = ({
  amount,
  currencies,
  currency,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div className="main">
      <div className="group">
        <input
          type="text"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencies.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;
