import { Router } from 'express';
import DocumentoController from '../controllers/documento.controller';
import AsyncHandler from '../middleware/asyncHandler'; // Importa el helper

const DocumentoRouter = Router();

DocumentoRouter.get('/', AsyncHandler(DocumentoController.obtenerTodosLosDocumentos));
DocumentoRouter.get('/:id', AsyncHandler(DocumentoController.obtenerDocumentoPorId));
DocumentoRouter.post('/create', AsyncHandler(DocumentoController.nuevoDocumento));
DocumentoRouter.put('/update/:id', AsyncHandler(DocumentoController.actualizarDocumento));
DocumentoRouter.delete('/delete/:id', AsyncHandler(DocumentoController.eliminarDocumento));

export default DocumentoRouter;
