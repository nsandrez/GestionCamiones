import { Router } from 'express';
import ProyectoUsuarioController from '../../controllers/proyectos/proyecto-usuario.controller';
import AsyncHandler from '../../middleware/asyncHandler'; // Importa el helper

const ProyectoUsuarioRouter = Router();

ProyectoUsuarioRouter.get('/', AsyncHandler(ProyectoUsuarioController.obtenerTodosUsuarioProyecto));
ProyectoUsuarioRouter.get('/:id', AsyncHandler(ProyectoUsuarioController.obtenerPorIdUsuarioProyecto));
ProyectoUsuarioRouter.post('/create', AsyncHandler(ProyectoUsuarioController.nuevoUsuarioProyecto));
ProyectoUsuarioRouter.put('/update/:id', AsyncHandler(ProyectoUsuarioController.actualizarUsuarioProyecto));
ProyectoUsuarioRouter.delete('/delete/:id', AsyncHandler(ProyectoUsuarioController.eliminarUsuarioProyecto));

export default ProyectoUsuarioRouter;
