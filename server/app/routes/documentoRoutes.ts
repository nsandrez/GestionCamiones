import { Router } from 'express';
import documentoController from '../controllers/documentoController';
import asyncHandler from '../middleware/asyncHandler'; // Importa el helper

const documentoRouter = Router();

documentoRouter.get('/', asyncHandler(documentoController.obtenerTodosLosDocumentos));
documentoRouter.get('/:id', asyncHandler(documentoController.obtenerDocumentoPorId));
documentoRouter.post('/create', asyncHandler(documentoController.nuevoDocumento));
documentoRouter.put('/update/:id', asyncHandler(documentoController.actualizarDocumento));
documentoRouter.delete('/delete/:id', asyncHandler(documentoController.eliminarDocumento));

export default documentoRouter;
