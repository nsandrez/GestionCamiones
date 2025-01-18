import { Router } from 'express';
import camionConductorController from '../controllers/camionConductorController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const camionConductorRouter = Router();

camionConductorRouter.get('/', asyncHandler(camionConductorController.obtenerTodosCamionConductor));
camionConductorRouter.get('/:id', asyncHandler(camionConductorController.obtenerPorIdCamionConductor));
camionConductorRouter.post('/create', asyncHandler(camionConductorController.nuevoCamionConductor));
camionConductorRouter.put('/update/:id', asyncHandler(camionConductorController.actualizarCamionConductor));
camionConductorRouter.delete('/delete/:id', asyncHandler(camionConductorController.eliminarCamionConductor));

export default camionConductorRouter;
