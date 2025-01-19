import { Request, Response } from 'express';
import CamionConductorService from '../services/camion-conductor.service';

class CamionConductorController {
    // Obtener todas las relaciones camion-conductor
    async obtenerTodosCamionConductor(req: Request, res: Response): Promise<Response> {
        try {
            const camionConductor = await CamionConductorService.obtenerTodosCamionConductor();
            return res.status(200).json(camionConductor);
        } catch (error) {
            console.error('Error al obtener las relaciones camion-conductor:', error);
            return res.status(500).json({ error: 'Error al obtener las relaciones camion-conductor.' });
        }
    }

    // Obtener una relación camion-conductor por ID
    async obtenerPorIdCamionConductor(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const camionConductor = await CamionConductorService.obtenerPorIdCamionConductor(id);
            if (!camionConductor) {
                return res.status(404).json({ message: 'Relación camion-conductor no encontrada.' });
            }

            return res.status(200).json(camionConductor);
        } catch (error) {
            console.error('Error al obtener relación camion-conductor por ID:', error);
            return res.status(500).json({ error: 'Error al obtener relación camion-conductor por ID.' });
        }
    }

    // Crear una nueva relación camion-conductor
    async nuevoCamionConductor(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoCamionConductor = await CamionConductorService.nuevoCamionConductor(req.body);
            return res.status(201).json(nuevoCamionConductor);
        } catch (error) {
            console.error('Error al crear relación camion-conductor:', error);
            return res.status(500).json({ error: 'Error al crear relación camion-conductor.' });
        }
    }

    // Actualizar una relación camion-conductor existente
    async actualizarCamionConductor(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const registroActualizado = await CamionConductorService.actualizarCamionConductor(id, req.body);
            return res.status(200).json(registroActualizado);
        } catch (error) {
            console.error('Error al actualizar relación camion-conductor:', error);
            return res.status(500).json({ error: 'Error al actualizar relación camion-conductor.' });
        }
    }

    // Eliminar una relación camion-conductor
    async eliminarCamionConductor(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            await CamionConductorService.eliminarCamionConductor(id);
            return res.status(204).send();
        } catch (error) {
            console.error('Error al eliminar relación camion-conductor:', error);
            return res.status(500).json({ error: 'Error al eliminar relación camion-conductor.' });
        }
    }
}

export default new CamionConductorController();
