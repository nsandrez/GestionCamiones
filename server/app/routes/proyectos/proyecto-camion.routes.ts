import { Router } from 'express';
import ProyectoCamionController from '../../controllers/proyectos/proyecto-camion.controller';
import AsyncHandler from '../../middleware/asyncHandler'; // Importa el helper

const ProyectoCamionRouter = Router();

ProyectoCamionRouter.get('/', AsyncHandler(ProyectoCamionController.obtenerTodosCamionProyecto));
ProyectoCamionRouter.get('/:id', AsyncHandler(ProyectoCamionController.obtenerPorIdCamionProyecto));
ProyectoCamionRouter.post('/create', AsyncHandler(ProyectoCamionController.nuevoCamionProyecto));
ProyectoCamionRouter.put('/update/:id', AsyncHandler(ProyectoCamionController.actualizarCamionProyecto));
ProyectoCamionRouter.delete('/delete/:id', AsyncHandler(ProyectoCamionController.eliminarCamionProyecto));

export default ProyectoCamionRouter;
