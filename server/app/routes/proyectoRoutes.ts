import { Router } from 'express';
import ProyectoController from '../controllers/proyectoController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const proyectoRouter = Router();

proyectoRouter.get('/', asyncHandler(ProyectoController.obtenerTodosLosProyectos));
proyectoRouter.get('/:id', asyncHandler(ProyectoController.obtenerProyectoPorId));
proyectoRouter.post('/create', asyncHandler(ProyectoController.nuevoProyecto));
proyectoRouter.put('/update/:id', asyncHandler(ProyectoController.actualizarProyecto));
proyectoRouter.delete('/delete/:id', asyncHandler(ProyectoController.eliminarProyecto));

export default proyectoRouter;
