import { Router } from 'express';
import * as clienteController from '../controllers/clientController';

const router = Router();

router.get('/clients', clienteController.getClients);
router.post('/clients', clienteController.createClient);
router.get('/clients/:id', clienteController.getClient);
router.put('/clients/:id', clienteController.updateClient);
// Define las rutas para crear, actualizar y eliminar

router.post('/clients/:id/visits', clienteController.createVisit);
router.get('/clients/:id/visits', clienteController.getAllVisit);

export default router;
