import { Router } from 'express';
import documentoProyectoController from '../controllers/documentoProyectoController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const documentoProyectoRouter = Router();

documentoProyectoRouter.get('/', asyncHandler(documentoProyectoController.obtenerTodosDocumentosProyectos));
documentoProyectoRouter.get('/:id', asyncHandler(documentoProyectoController.obtenerPorIdDocumentoProyecto));
documentoProyectoRouter.post('/create', asyncHandler(documentoProyectoController.nuevoDocumentoProyecto));
documentoProyectoRouter.put('/update/:id', asyncHandler(documentoProyectoController.actualizarDocumentoProyecto));
documentoProyectoRouter.delete('/delete/:id', asyncHandler(documentoProyectoController.eliminarDocumentoProyecto));

export default documentoProyectoRouter;
