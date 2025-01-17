import { Router } from 'express';
import conductorController from '../controllers/conductorController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const conductorRouter = Router();

conductorRouter.get('/', asyncHandler(conductorController.obtenerTodosLosConductores));
conductorRouter.get('/:id', asyncHandler(conductorController.obtenerConductorPorId));
conductorRouter.post('/create', asyncHandler(conductorController.nuevoConductor));
conductorRouter.put('/update/:id', asyncHandler(conductorController.actualizarConductor));
conductorRouter.delete('/delete/:id', asyncHandler(conductorController.eliminarConductor));

export default conductorRouter;
