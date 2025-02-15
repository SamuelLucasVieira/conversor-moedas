import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import currencyRoutes from './routes/conversorRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Habilita CORS para permitir requisições do frontend
app.use(cors());

app.use(express.json());
app.use('/convert', currencyRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
