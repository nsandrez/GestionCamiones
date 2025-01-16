import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const usuarioRouter = Router();

usuarioRouter.get('/', asyncHandler(usuarioController.obtenerTodosLosUsuarios));
usuarioRouter.get('/:id', asyncHandler(usuarioController.obtenerUsuarioPorId));
usuarioRouter.post('/create', asyncHandler(usuarioController.nuevoUsuario));
usuarioRouter.put('/update/:id', asyncHandler(usuarioController.actualizarUsuario));
usuarioRouter.delete('/delete/:id', asyncHandler(usuarioController.eliminarUsuario));

export default usuarioRouter;
