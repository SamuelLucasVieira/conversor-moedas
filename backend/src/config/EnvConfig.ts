import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
    PORT: process.env.PORT || 5000,
    API_URL: process.env.API_URL || 'https://api.exchangerate-api.com/v4/latest/',
};
