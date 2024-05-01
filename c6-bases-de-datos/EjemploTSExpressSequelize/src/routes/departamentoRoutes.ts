import { Router } from 'express';
import * as clienteController from '../controllers/departamentController';

const router = Router();

router.get('/departaments', clienteController.getDepartaments);
router.post('/departaments', clienteController.createDepartament);
router.get('/departaments/:id', clienteController.getDepartament);
router.put('/departaments/:id', clienteController.updateDepartament);

export default router;
