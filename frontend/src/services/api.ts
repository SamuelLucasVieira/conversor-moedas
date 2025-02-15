import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const convertCurrency = async (from: string, to: string, amount: number) => {
    try {
        const response = await axios.get(`${API_URL}/convert`, {
            params: { from, to, amount }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar taxa de câmbio:", error);
        throw error;
    }
};
