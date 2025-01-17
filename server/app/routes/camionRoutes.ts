import { Router } from 'express';
import camionController from '../controllers/camionController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const camionRouter = Router();

camionRouter.get('/', asyncHandler(camionController.obtenerTodosLosCamiones));
camionRouter.get('/:id', asyncHandler(camionController.obtenerCamionPorId));
camionRouter.post('/create', asyncHandler(camionController.nuevoCamion));
camionRouter.put('/update/:id', asyncHandler(camionController.actualizarCamion));
camionRouter.delete('/delete/:id', asyncHandler(camionController.eliminarCamion));

export default camionRouter;
