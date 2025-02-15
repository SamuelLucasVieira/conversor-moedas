import { Router } from 'express';
import { convertCurrency } from '../controllers/conversorController';

const router = Router();

// Certifique-se de que a função está sendo usada corretamente
router.get('/', async (req, res) => {
    await convertCurrency(req, res);
});

export default router;
