import { Router } from 'express';
import ProyectoController from '../controllers/proyecto.controller';
import AsyncHandler from '../middleware/asyncHandler'; // Importa el helper

const ProyectoRouter = Router();

ProyectoRouter.get('/', AsyncHandler(ProyectoController.obtenerTodosLosProyectos));
ProyectoRouter.get('/:id', AsyncHandler(ProyectoController.obtenerProyectoPorId));
ProyectoRouter.post('/create', AsyncHandler(ProyectoController.nuevoProyecto));
ProyectoRouter.put('/update/:id', AsyncHandler(ProyectoController.actualizarProyecto));
ProyectoRouter.delete('/delete/:id', AsyncHandler(ProyectoController.eliminarProyecto));

export default ProyectoRouter;
