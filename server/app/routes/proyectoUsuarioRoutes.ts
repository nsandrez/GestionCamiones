import { Router } from 'express';
import proyectoUsuarioController from '../controllers/proyectoUsuarioController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const proyectoUsuarioRouter = Router();

proyectoUsuarioRouter.get('/', asyncHandler(proyectoUsuarioController.obtenerTodosUsuarioProyecto));
proyectoUsuarioRouter.get('/:id', asyncHandler(proyectoUsuarioController.obtenerPorIdUsuarioProyecto));
proyectoUsuarioRouter.post('/create', asyncHandler(proyectoUsuarioController.nuevoUsuarioProyecto));
proyectoUsuarioRouter.put('/update/:id', asyncHandler(proyectoUsuarioController.actualizarUsuarioProyecto));
proyectoUsuarioRouter.delete('/delete/:id', asyncHandler(proyectoUsuarioController.eliminarUsuarioProyecto));

export default proyectoUsuarioRouter;
