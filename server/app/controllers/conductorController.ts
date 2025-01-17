import { Request, Response } from 'express';
import conductorService from '../services/conductorService';

class conductorController {
    // Obtener todos los conductores
    async obtenerTodosLosConductores(req: Request, res: Response): Promise<Response> {
        try {
            const conductores = await conductorService.obtenerTodosLosConductores();
            return res.status(200).json(conductores);
        } catch (error) {
            console.error('Error al obtener conductores:', error);
            return res.status(500).json({ error: 'Error al obtener conductores.' });
        }
    }

    // Obtener un conductor por ID
    async obtenerConductorPorId(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const conductor = await conductorService.obtenerConductorPorId(id);

            if (!conductor) {
                return res.status(404).json({ message: 'Conductor no encontrado.' });
            }

            return res.status(200).json(conductor);
        } catch (error) {
            console.error('Error al obtener conductor por ID:', error);
            return res.status(500).json({ error: 'Error al obtener conductor por ID.' });
        }
    }

    // Crear un nuevo conductor
    async nuevoConductor(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoConductor = await conductorService.nuevoConductor(req.body);
            return res.status(201).json(nuevoConductor);
        } catch (error) {
            console.error('Error al crear conductor:', error);
            return res.status(500).json({ error: 'Error al crear conductor.' });
        }
    }

    // Actualizar un conductor por ID
    async actualizarConductor(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const [cantidad, actualizarConductor] = await conductorService.actualizarConductor(id, req.body);

            if (cantidad === 0) {
                return res.status(404).json({ message: 'Conductor no encontrado.' });
            }

            return res.status(200).json(actualizarConductor);
        } catch (error) {
            console.error('Error al actualizar conductor:', error);
            return res.status(500).json({ error: 'Error al actualizar conductor.' });
        }
    }

    // Eliminar un conductor por ID
    async eliminarConductor(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const resultado = await conductorService.eliminarConductor(id);

            if (resultado === 0) {
                return res.status(404).json({ message: 'Conductor no encontrado.' });
            }

            return res.status(204).send(); // No devuelve contenido, pero indica éxito
        } catch (error) {
            console.error('Error al eliminar conductor:', error);
            return res.status(500).json({ error: 'Error al eliminar conductor.' });
        }
    }
}

export default new conductorController();
