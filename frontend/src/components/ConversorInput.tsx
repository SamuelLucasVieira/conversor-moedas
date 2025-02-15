interface Props {
    amount: string;
    setAmount: (value: string) => void;
    from: string;
    setFrom: (value: string) => void;
    to: string;
    setTo: (value: string) => void;
  }
  
  export default function CurrencyInput({ amount, setAmount, from, setFrom, to, setTo }: Props) {
    return (
      <div className="input-container">
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />
  
        <div className="select-group">
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="select-box">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
          </select>
  
          <span>➡️</span>
  
          <select value={to} onChange={(e) => setTo(e.target.value)} className="select-box">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
          </select>
        </div>
      </div>
    );
  }
  