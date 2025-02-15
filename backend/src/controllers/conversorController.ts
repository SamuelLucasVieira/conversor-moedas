import { Request, Response } from 'express';
import { fetchExchangeRate } from '../services/conversorServices';

export const convertCurrency = async (req: Request, res: Response) => {
    try {
        const { from, to, amount } = req.query;
        if (!from || !to || !amount) {
            return res.status(400).json({ error: 'Parâmetros ausentes' });
        }

        const rate = await fetchExchangeRate(from as string, to as string);
        if (!rate) {
            return res.status(400).json({ error: 'Moeda inválida' });
        }

        const convertedAmount = (parseFloat(amount as string) * rate).toFixed(2);
        res.json({ from, to, originalAmount: amount, convertedAmount, rate });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar taxa de câmbio' });
    }
};
