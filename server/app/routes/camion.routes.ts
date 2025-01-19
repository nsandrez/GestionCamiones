import { Router } from 'express';
import CamionController from '../controllers/camion.controller';
import AsyncHandler from '../middleware/asyncHandler'; // Importa el helper

const CamionRouter = Router();

CamionRouter.get('/', AsyncHandler(CamionController.obtenerTodosLosCamiones));
CamionRouter.get('/:id', AsyncHandler(CamionController.obtenerCamionPorId));
CamionRouter.post('/create', AsyncHandler(CamionController.nuevoCamion));
CamionRouter.put('/update/:id', AsyncHandler(CamionController.actualizarCamion));
CamionRouter.delete('/delete/:id', AsyncHandler(CamionController.eliminarCamion));

export default CamionRouter;
