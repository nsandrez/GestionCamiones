import { Request, Response } from 'express';
import proyectoUsuarioService from '../services/proyectoUsuarioService';

class ProyectoUsuarioController {
    // Obtener todas las relaciones usuario-proyecto
    async obtenerTodosUsuarioProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const proyectosUsuarios = await proyectoUsuarioService.obtenerTodosUsuarioProyecto();
            return res.status(200).json(proyectosUsuarios);
        } catch (error) {
            console.error('Error al obtener las relaciones usuario-proyecto:', error);
            return res.status(500).json({ error: 'Error al obtener las relaciones usuario-proyecto.' });
        }
    }

    // Obtener una relación usuario-proyecto por ID
    async obtenerPorIdUsuarioProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const proyectoUsuario = await proyectoUsuarioService.obtenerPorIdUsuarioProyecto(id);
            if (!proyectoUsuario) {
                return res.status(404).json({ message: 'Relación usuario-proyecto no encontrada.' });
            }

            return res.status(200).json(proyectoUsuario);
        } catch (error) {
            console.error('Error al obtener relación usuario-proyecto por ID:', error);
            return res.status(500).json({ error: 'Error al obtener relación usuario-proyecto por ID.' });
        }
    }

    // Crear una nueva relación usuario-proyecto
    async nuevoUsuarioProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoProyectosUsuario = await proyectoUsuarioService.nuevoUsuarioProyecto(req.body);
            return res.status(201).json(nuevoProyectosUsuario);
        } catch (error) {
            console.error('Error al crear relación usuario-proyecto:', error);
            return res.status(500).json({ error: 'Error al crear relación usuario-proyecto.' });
        }
    }

    // Actualizar una relación usuario-proyecto existente
    async actualizarUsuarioProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            const registroActualizado = await proyectoUsuarioService.actualizarUsuarioProyecto(id, req.body);
            return res.status(200).json(registroActualizado);
        } catch (error) {
            console.error('Error al actualizar relación usuario-proyecto:', error);
            return res.status(500).json({ error: 'Error al actualizar relación usuario-proyecto.' });
        }
    }

    // Eliminar una relación usuario-proyecto
    async eliminarUsuarioProyecto(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: 'ID inválido.' });
            }

            await proyectoUsuarioService.eliminarUsuarioProyecto(id);
            return res.status(204).send();
        } catch (error) {
            console.error('Error al eliminar relación usuario-proyecto:', error);
            return res.status(500).json({ error: 'Error al eliminar relación usuario-proyecto.' });
        }
    }
}

export default new ProyectoUsuarioController();
