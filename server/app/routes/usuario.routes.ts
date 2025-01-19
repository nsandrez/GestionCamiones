import { Router } from 'express';
import UsuarioController from '../controllers/usuario.controller';
import AsyncHandler from '../middleware/asyncHandler'; // Importa el helper

const UsuarioRouter = Router();

UsuarioRouter.get('/', AsyncHandler(UsuarioController.obtenerTodosLosUsuarios));
UsuarioRouter.get('/:id', AsyncHandler(UsuarioController.obtenerUsuarioPorId));
UsuarioRouter.post('/create', AsyncHandler(UsuarioController.nuevoUsuario));
UsuarioRouter.put('/update/:id', AsyncHandler(UsuarioController.actualizarUsuario));
UsuarioRouter.delete('/delete/:id', AsyncHandler(UsuarioController.eliminarUsuario));

export default UsuarioRouter;
