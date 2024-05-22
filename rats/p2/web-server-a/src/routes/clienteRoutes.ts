import { Router } from 'express';
import * as clienteController from '../controllers/clientController';

const router = Router();
router.post('/clients', clienteController.createClient);
router.get('/clients/:id', clienteController.getClient);
router.get('/clients-redis/:id', clienteController.getRedisClient);

export default router;
