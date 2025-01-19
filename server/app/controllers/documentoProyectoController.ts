import { Request, Response } from 'express';
import documentoProyectoService from '../services/documentoProyectoService';

class documentoProyectoController {
    // Obtener todas las relaciones documento-proyecto
    async obtenerTodosDocumentosProyectos(req: Request, res: Response): Promise<Response> {
        try {
            const documentoProyecto = await documentoProyectoService.obtenerTodosDocumentosProyectos();
            return res.status(200).json(documentoProyecto);
        } catch (error) {
            console.error('Error al obtener las relaciones documento-proyecto:', error);
            return res.status(500).json({ error: 'Error al obtener las relaciones documento-proyecto.' });
        }
    }

    // Obtener una relación documento-proyecto por ID
    async obtenerPorIdDocumentoProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const documentoProyecto = await documentoProyectoService.obtenerPorIdDocumentoProyecto(id);
            if (!documentoProyecto) {
                return res.status(404).json({ message: 'Relación documento-proyecto no encontrada.' });
            }

            return res.status(200).json(documentoProyecto);
        } catch (error) {
            console.error('Error al obtener relación documento-proyecto por ID:', error);
            return res.status(500).json({ error: 'Error al obtener relación documento-proyecto por ID.' });
        }
    }

    // Crear una nueva relación documento-proyecto
    async nuevoDocumentoProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoDocumentoProyecto = await documentoProyectoService.nuevoDocumentoProyecto(req.body);
            return res.status(201).json(nuevoDocumentoProyecto);
        } catch (error) {
            console.error('Error al crear relación documento-proyecto:', error);
            return res.status(500).json({ error: 'Error al crear relación documento-proyecto.' });
        }
    }

    // Actualizar una relación documento-proyecto existente
    async actualizarDocumentoProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const registroActualizado = await documentoProyectoService.actualizarDocumentoProyecto(id, req.body);
            return res.status(200).json(registroActualizado);
        } catch (error) {
            console.error('Error al actualizar relación documento-proyecto:', error);
            return res.status(500).json({ error: 'Error al actualizar relación documento-proyecto.' });
        }
    }

    // Eliminar una relación documento-proyecto
    async eliminarDocumentoProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            await documentoProyectoService.eliminarDocumentoProyecto(id);
            return res.status(204).send();
        } catch (error) {
            console.error('Error al eliminar relación documento-proyecto:', error);
            return res.status(500).json({ error: 'Error al eliminar relación documento-proyecto.' });
        }
    }
}

export default new documentoProyectoController();
