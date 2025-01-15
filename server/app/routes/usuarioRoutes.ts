import { Router } from 'express';
import UsuarioController from '../controllers/usuarioController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const usuarioRouter = Router();

usuarioRouter.get('/', asyncHandler(UsuarioController.obtenerTodosLosUsuarios));
usuarioRouter.get('/:id', asyncHandler(UsuarioController.obtenerUsuarioPorId));
usuarioRouter.post('/create', asyncHandler(UsuarioController.nuevoUsuario));
usuarioRouter.put('/update/:id', asyncHandler(UsuarioController.actualizarUsuario));
usuarioRouter.delete('/delete/:id', asyncHandler(UsuarioController.eliminarUsuario));

export default usuarioRouter;
