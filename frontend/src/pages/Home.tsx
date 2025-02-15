import { useCurrencyConverter } from "../hooks/useCurrencyConversor";
import CurrencyInput from "../components/ConversorInput";
import ResultDisplay from "../components/ResultadoDisplay";

export default function Home() {
  const { from, setFrom, to, setTo, amount, setAmount, converted, error, handleConvert } =
    useCurrencyConverter();

  return (
    <div>
      <h1>Conversor de Moedas 💰</h1>

      <CurrencyInput
        amount={amount}
        setAmount={setAmount}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
      />

      <button onClick={handleConvert} className="btn">
        Converter
      </button>

      {error && <p className="error">{error}</p>}

      <ResultDisplay converted={converted} />
    </div>
  );
}
