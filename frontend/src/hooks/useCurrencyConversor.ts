import { useState } from 'react';
import { convertCurrency } from '../services/api';

export function useCurrencyConverter() {
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('EUR');
    const [amount, setAmount] = useState('');
    const [converted, setConverted] = useState<string | null>(null);
    const [error, setError] = useState('');

    const handleConvert = async () => {
        if (!amount) {
            setError('Insira um valor para converter.');
            return;
        }
        setError('');

        try {
            const result:any = await convertCurrency(from, to, parseFloat(amount));
            setConverted(result.convertedAmount);
        } catch (err) {
            setError('Erro ao buscar taxa de câmbio.');
        }
    };

    return {
        from, setFrom,
        to, setTo,
        amount, setAmount,
        converted,
        error,
        handleConvert
    };
}
