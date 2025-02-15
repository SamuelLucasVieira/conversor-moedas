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
        <div>
            <input 
                type="number" 
                placeholder="Valor" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                className="border p-2 w-full" 
            />
            <div className="flex space-x-2">
                <select value={from} onChange={(e) => setFrom(e.target.value)} className="border p-2 flex-1">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BRL">BRL</option>
                </select>
                <span className="self-center">→</span>
                <select value={to} onChange={(e) => setTo(e.target.value)} className="border p-2 flex-1">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BRL">BRL</option>
                </select>
            </div>
        </div>
    );
}
