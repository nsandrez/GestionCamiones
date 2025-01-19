import { Request, Response } from 'express';
import ProyectoConductorService from '../../services/proyectos/proyecto-conductor.service';

class ProyectoConductorController {
    // Obtener todas las relaciones conductor-proyecto
    async obtenerTodosConductorProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const proyectosConductores = await ProyectoConductorService.obtenerTodosConductorProyecto();
            return res.status(200).json(proyectosConductores);
        } catch (error) {
            console.error('Error al obtener las relaciones conductor-proyecto:', error);
            return res.status(500).json({ error: 'Error al obtener las relaciones conductor-proyecto.' });
        }
    }

    // Obtener una relación conductor-proyecto por ID
    async obtenerPorIdConductorProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const proyectoConductor = await ProyectoConductorService.obtenerPorIdConductorProyecto(id);
            if (!proyectoConductor) {
                return res.status(404).json({ message: 'Relación conductor-proyecto no encontrada.' });
            }

            return res.status(200).json(proyectoConductor);
        } catch (error) {
            console.error('Error al obtener relación conductor-proyecto por ID:', error);
            return res.status(500).json({ error: 'Error al obtener relación conductor-proyecto por ID.' });
        }
    }

    // Crear una nueva relación conductor-proyecto
    async nuevoConductorProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoConductorProyecto = await ProyectoConductorService.nuevoConductorProyecto(req.body);
            return res.status(201).json(nuevoConductorProyecto);
        } catch (error) {
            console.error('Error al crear relación conductor-proyecto:', error);
            return res.status(500).json({ error: 'Error al crear relación conductor-proyecto.' });
        }
    }

    // Actualizar una relación conductor-proyecto existente
    async actualizarConductorProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const registroActualizado = await ProyectoConductorService.actualizarConductorProyecto(id, req.body);
            return res.status(200).json(registroActualizado);
        } catch (error) {
            console.error('Error al actualizar relación conductor-proyecto:', error);
            return res.status(500).json({ error: 'Error al actualizar relación conductor-proyecto.' });
        }
    }

    // Eliminar una relación conductor-proyecto
    async eliminarConductorProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            await ProyectoConductorService.eliminarConductorProyecto(id);
            return res.status(204).send();
        } catch (error) {
            console.error('Error al eliminar relación conductor-proyecto:', error);
            return res.status(500).json({ error: 'Error al eliminar relación conductor-proyecto.' });
        }
    }
}

export default new ProyectoConductorController();
