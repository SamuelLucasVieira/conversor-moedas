import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

export const fetchExchangeRate = async (from: string, to: string): Promise<number | null> => {
    try {
        const response = await axios.get(`${API_URL}${from}`);
        return response.data.rates[to] || null;
    } catch (error) {
        console.error('Erro ao buscar taxa de câmbio:', error);
        return null;
    }
};
