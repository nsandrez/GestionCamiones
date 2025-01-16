import { Router } from 'express';
import proyectoController from '../controllers/proyectoController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const proyectoRouter = Router();

proyectoRouter.get('/', asyncHandler(proyectoController.obtenerTodosLosProyectos));
proyectoRouter.get('/:id', asyncHandler(proyectoController.obtenerProyectoPorId));
proyectoRouter.post('/create', asyncHandler(proyectoController.nuevoProyecto));
proyectoRouter.put('/update/:id', asyncHandler(proyectoController.actualizarProyecto));
proyectoRouter.delete('/delete/:id', asyncHandler(proyectoController.eliminarProyecto));

export default proyectoRouter;
