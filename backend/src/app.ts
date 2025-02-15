import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import currencyRoutes from './routes/conversorRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/convert', currencyRoutes);

export default app;
