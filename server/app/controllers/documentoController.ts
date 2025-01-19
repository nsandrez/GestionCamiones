import { Request, Response } from 'express';
import documentoService from '../services/documentoService';

class documentoController {
    // Obtener todos los documentos
    async obtenerTodosLosDocumentos(req: Request, res: Response): Promise<Response> {
        try {
            const documentos = await documentoService.obtenerTodosLosDocumentos();
            return res.status(200).json(documentos);
        } catch (error) {
            console.error('Error al obtener documentos:', error);
            return res.status(500).json({ error: 'Error al obtener documentos.' });
        }
    }

    // Obtener un documento por ID
    async obtenerDocumentoPorId(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const documento = await documentoService.obtenerDocumentoPorId(id);

            if (!documento) {
                return res.status(404).json({ message: 'documento no encontrado.' });
            }

            return res.status(200).json(documento);
        } catch (error) {
            console.error('Error al obtener documento por ID:', error);
            return res.status(500).json({ error: 'Error al obtener documento por ID.' });
        }
    }

    // Crear un nuevo documento
    async nuevoDocumento(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoDocumento = await documentoService.nuevoDocumento(req.body);
            return res.status(201).json(nuevoDocumento);
        } catch (error) {
            console.error('Error al crear documento:', error);
            return res.status(500).json({ error: 'Error al crear documento.' });
        }
    }

    // Actualizar un documento por ID
    async actualizarDocumento(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const [cantidad, actualizardocumento] = await documentoService.actualizarDocumento(id, req.body);

            if (cantidad === 0) {
                return res.status(404).json({ message: 'documento no encontrado.' });
            }

            return res.status(200).json(actualizardocumento);
        } catch (error) {
            console.error('Error al actualizar documento:', error);
            return res.status(500).json({ error: 'Error al actualizar documento.' });
        }
    }

    // Eliminar un documento por ID
    async eliminarDocumento(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const resultado = await documentoService.eliminarDocumento(id);

            if (resultado === 0) {
                return res.status(404).json({ message: 'documento no encontrado.' });
            }

            return res.status(204).send(); // No devuelve contenido, pero indica éxito
        } catch (error) {
            console.error('Error al eliminar documento:', error);
            return res.status(500).json({ error: 'Error al eliminar documento.' });
        }
    }
}

export default new documentoController();
