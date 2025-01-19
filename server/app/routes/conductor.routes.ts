import { Router } from 'express';
import ConductorController from '../controllers/conductor.controller';
import AsyncHandler from '../middleware/asyncHandler'; // Importa el helper

const ConductorRouter = Router();

ConductorRouter.get('/', AsyncHandler(ConductorController.obtenerTodosLosConductores));
ConductorRouter.get('/:id', AsyncHandler(ConductorController.obtenerConductorPorId));
ConductorRouter.post('/create', AsyncHandler(ConductorController.nuevoConductor));
ConductorRouter.put('/update/:id', AsyncHandler(ConductorController.actualizarConductor));
ConductorRouter.delete('/delete/:id', AsyncHandler(ConductorController.eliminarConductor));

export default ConductorRouter;
