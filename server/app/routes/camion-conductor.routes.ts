import { Router } from 'express';
import CamionConductorController from '../controllers/camion-conductor.controller';
import AsyncHandler from '../middleware/asyncHandler'; // Importa el helper

const CamionConductorRouter = Router();

CamionConductorRouter.get('/', AsyncHandler(CamionConductorController.obtenerTodosCamionConductor));
CamionConductorRouter.get('/:id', AsyncHandler(CamionConductorController.obtenerPorIdCamionConductor));
CamionConductorRouter.post('/create', AsyncHandler(CamionConductorController.nuevoCamionConductor));
CamionConductorRouter.put('/update/:id', AsyncHandler(CamionConductorController.actualizarCamionConductor));
CamionConductorRouter.delete('/delete/:id', AsyncHandler(CamionConductorController.eliminarCamionConductor));

export default CamionConductorRouter;
