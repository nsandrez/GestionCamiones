import { Request, Response } from 'express';
import ProyectoCamionService from '../../services/proyectos/proyecto-camion.service';

class ProyectoCamionController {
    // Obtener todas las relaciones camion-proyecto
    async obtenerTodosCamionProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const proyectosCamiones = await ProyectoCamionService.obtenerTodosCamionProyecto();
            return res.status(200).json(proyectosCamiones);
        } catch (error) {
            console.error('Error al obtener las relaciones camion-proyecto:', error);
            return res.status(500).json({ error: 'Error al obtener las relaciones camion-proyecto.' });
        }
    }

    // Obtener una relación camion-proyecto por ID
    async obtenerPorIdCamionProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const proyectoCamion = await ProyectoCamionService.obtenerPorIdCamionProyecto(id);
            if (!proyectoCamion) {
                return res.status(404).json({ message: 'Relación camion-proyecto no encontrada.' });
            }

            return res.status(200).json(proyectoCamion);
        } catch (error) {
            console.error('Error al obtener relación camion-proyecto por ID:', error);
            return res.status(500).json({ error: 'Error al obtener relación camion-proyecto por ID.' });
        }
    }

    // Crear una nueva relación camion-proyecto
    async nuevoCamionProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoCamionProyecto = await ProyectoCamionService.nuevoCamionProyecto(req.body);
            return res.status(201).json(nuevoCamionProyecto);
        } catch (error) {
            console.error('Error al crear relación camion-proyecto:', error);
            return res.status(500).json({ error: 'Error al crear relación camion-proyecto.' });
        }
    }

    // Actualizar una relación camion-proyecto existente
    async actualizarCamionProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const registroActualizado = await ProyectoCamionService.actualizarCamionProyecto(id, req.body);
            return res.status(200).json(registroActualizado);
        } catch (error) {
            console.error('Error al actualizar relación camion-proyecto:', error);
            return res.status(500).json({ error: 'Error al actualizar relación camion-proyecto.' });
        }
    }

    // Eliminar una relación camion-proyecto
    async eliminarCamionProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            await ProyectoCamionService.eliminarCamionProyecto(id);
            return res.status(204).send();
        } catch (error) {
            console.error('Error al eliminar relación camion-proyecto:', error);
            return res.status(500).json({ error: 'Error al eliminar relación camion-proyecto.' });
        }
    }
}

export default new ProyectoCamionController();
