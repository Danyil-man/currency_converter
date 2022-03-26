import "./App.css";
import CurrencyInput from "./components/CurrencyInput";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=57a6ba23b4a3e503c9da85957df5e262"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleAmountChnage(1);
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(2);
  }

  function handleAmountChnage(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }
  function handleCurrencyChange(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmountChnage2(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }
  function handleCurrencyChange2(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
        onAmountChange={handleAmountChnage}
        onCurrencyChange={handleCurrencyChange}
      />
      <CurrencyInput
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
        onAmountChange={handleAmountChnage2}
        onCurrencyChange={handleCurrencyChange2}
      />
    </div>
  );
}

export default App;
