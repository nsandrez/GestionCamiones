import { Request, Response } from 'express';
import ProyectoService from '../services/proyectoService';

class ProyectoController {
    // Obtener todos los proyectos
    async obtenerTodosLosProyectos(req: Request, res: Response): Promise<Response> {
        try {
            const proyectos = await ProyectoService.obtenerTodosLosProyectos();
            return res.status(200).json(proyectos);
        } catch (error) {
            console.error('Error al obtener proyectos:', error);
            return res.status(500).json({ error: 'Error al obtener proyectos.' });
        }
    }

    // Obtener un proyecto por ID
    async obtenerProyectoPorId(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const proyecto = await ProyectoService.obtenerProyectoPorId(id);

            if (!proyecto) {
                return res.status(404).json({ message: 'Proyecto no encontrado.' });
            }

            return res.status(200).json(proyecto);
        } catch (error) {
            console.error('Error al obtener proyecto por ID:', error);
            return res.status(500).json({ error: 'Error al obtener proyecto por ID.' });
        }
    }

    // Crear un nuevo proyecto
    async nuevoProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoProyecto = await ProyectoService.nuevoProyecto(req.body);
            return res.status(201).json(nuevoProyecto);
        } catch (error) {
            console.error('Error al crear proyecto:', error);
            return res.status(500).json({ error: 'Error al crear proyecto.' });
        }
    }

    // Actualizar un proyecto por ID
    async actualizarProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const [cantidad, proyectosActualizados] = await ProyectoService.actualizarProyecto(id, req.body);

            if (cantidad === 0) {
                return res.status(404).json({ message: 'Proyecto no encontrado.' });
            }

            return res.status(200).json(proyectosActualizados);
        } catch (error) {
            console.error('Error al actualizar proyecto:', error);
            return res.status(500).json({ error: 'Error al actualizar proyecto.' });
        }
    }

    // Eliminar un proyecto por ID
    async eliminarProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const resultado = await ProyectoService.eliminarProyecto(id);

            if (resultado === 0) {
                return res.status(404).json({ message: 'Proyecto no encontrado.' });
            }

            return res.status(204).send(); // No devuelve contenido, pero indica éxito
        } catch (error) {
            console.error('Error al eliminar proyecto:', error);
            return res.status(500).json({ error: 'Error al eliminar proyecto.' });
        }
    }
}

export default new ProyectoController();
