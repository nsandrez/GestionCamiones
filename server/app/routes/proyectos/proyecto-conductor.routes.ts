import { Router } from 'express';
import ProyectoConductorController from '../../controllers/proyectos/proyecto-conductor.controller';
import AsyncHandler from '../../middleware/asyncHandler'; // Importa el helper

const ProyectoConductorRouter = Router();

ProyectoConductorRouter.get('/', AsyncHandler(ProyectoConductorController.obtenerTodosConductorProyecto));
ProyectoConductorRouter.get('/:id', AsyncHandler(ProyectoConductorController.obtenerPorIdConductorProyecto));
ProyectoConductorRouter.post('/create', AsyncHandler(ProyectoConductorController.nuevoConductorProyecto));
ProyectoConductorRouter.put('/update/:id', AsyncHandler(ProyectoConductorController.actualizarConductorProyecto));
ProyectoConductorRouter.delete('/delete/:id', AsyncHandler(ProyectoConductorController.eliminarConductorProyecto));

export default ProyectoConductorRouter;
