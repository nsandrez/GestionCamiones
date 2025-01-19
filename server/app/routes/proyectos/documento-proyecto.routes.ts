import { Router } from 'express';
import DocumentoProyectoController from '../../controllers/proyectos/documento-proyecto.controller';
import AsyncHandler from '../../middleware/asyncHandler'; // Importa el helper

const DocumentoProyectoRouter = Router();

DocumentoProyectoRouter.get('/', AsyncHandler(DocumentoProyectoController.obtenerTodosDocumentosProyectos));
DocumentoProyectoRouter.get('/:id', AsyncHandler(DocumentoProyectoController.obtenerPorIdDocumentoProyecto));
DocumentoProyectoRouter.post('/create', AsyncHandler(DocumentoProyectoController.nuevoDocumentoProyecto));
DocumentoProyectoRouter.put('/update/:id', AsyncHandler(DocumentoProyectoController.actualizarDocumentoProyecto));
DocumentoProyectoRouter.delete('/delete/:id', AsyncHandler(DocumentoProyectoController.eliminarDocumentoProyecto));

export default DocumentoProyectoRouter;
