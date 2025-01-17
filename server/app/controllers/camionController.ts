import { Request, Response } from 'express';
import camionService from '../services/camionService';

class camionController {
    // Obtener todos los camiones
    async obtenerTodosLosCamiones(req: Request, res: Response): Promise<Response> {
        try {
            const camiones = await camionService.obtenerTodosLosCamiones();
            return res.status(200).json(camiones);
        } catch (error) {
            console.error('Error al obtener camiones:', error);
            return res.status(500).json({ error: 'Error al obtener camiones.' });
        }
    }

    // Obtener un camion por ID
    async obtenerCamionPorId(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const camion = await camionService.obtenerCamionPorId(id);

            if (!camion) {
                return res.status(404).json({ message: 'Camión no encontrado.' });
            }

            return res.status(200).json(camion);
        } catch (error) {
            console.error('Error al obtener camión por ID:', error);
            return res.status(500).json({ error: 'Error al obtener camión por ID.' });
        }
    }

    // Crear un nuevo camion
    async nuevoCamion(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoCamion = await camionService.nuevoCamion(req.body);
            return res.status(201).json(nuevoCamion);
        } catch (error) {
            console.error('Error al crear camión:', error);
            return res.status(500).json({ error: 'Error al crear camión.' });
        }
    }

    // Actualizar un camion por ID
    async actualizarCamion(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const [cantidad, actualizarCamion] = await camionService.actualizarCamion(id, req.body);

            if (cantidad === 0) {
                return res.status(404).json({ message: 'Camión no encontrado.' });
            }

            return res.status(200).json(actualizarCamion);
        } catch (error) {
            console.error('Error al actualizar camión:', error);
            return res.status(500).json({ error: 'Error al actualizar camión.' });
        }
    }

    // Eliminar un camion por ID
    async eliminarCamion(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const resultado = await camionService.eliminarCamion(id);

            if (resultado === 0) {
                return res.status(404).json({ message: 'Camión no encontrado.' });
            }

            return res.status(204).send(); // No devuelve contenido, pero indica éxito
        } catch (error) {
            console.error('Error al eliminar camión:', error);
            return res.status(500).json({ error: 'Error al eliminar camión.' });
        }
    }
}

export default new camionController();
