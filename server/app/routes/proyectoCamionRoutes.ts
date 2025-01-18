import { Router } from 'express';
import proyectoCamionController from '../controllers/proyectoCamionController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const proyectoCamionRouter = Router();

proyectoCamionRouter.get('/', asyncHandler(proyectoCamionController.obtenerTodosCamionProyecto));
proyectoCamionRouter.get('/:id', asyncHandler(proyectoCamionController.obtenerPorIdCamionProyecto));
proyectoCamionRouter.post('/create', asyncHandler(proyectoCamionController.nuevoCamionProyecto));
proyectoCamionRouter.put('/update/:id', asyncHandler(proyectoCamionController.actualizarCamionProyecto));
proyectoCamionRouter.delete('/delete/:id', asyncHandler(proyectoCamionController.eliminarCamionProyecto));

export default proyectoCamionRouter;
