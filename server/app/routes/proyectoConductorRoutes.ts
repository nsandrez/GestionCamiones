import { Router } from 'express';
import proyectoConductorController from '../controllers/proyectoConductorController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const proyectoConductorRouter = Router();

proyectoConductorRouter.get('/', asyncHandler(proyectoConductorController.obtenerTodosConductorProyecto));
proyectoConductorRouter.get('/:id', asyncHandler(proyectoConductorController.obtenerPorIdConductorProyecto));
proyectoConductorRouter.post('/create', asyncHandler(proyectoConductorController.nuevoConductorProyecto));
proyectoConductorRouter.put('/update/:id', asyncHandler(proyectoConductorController.actualizarConductorProyecto));
proyectoConductorRouter.delete('/delete/:id', asyncHandler(proyectoConductorController.eliminarConductorProyecto));

export default proyectoConductorRouter;
