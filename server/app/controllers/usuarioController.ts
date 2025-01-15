import { Request, Response } from 'express';
import UsuarioService from '../services/usuarioService';

class UsuarioController {
    // Obtener todos los usuarios
    async obtenerTodosLosUsuarios(req: Request, res: Response): Promise<Response> {
        try {
            const usuarios = await UsuarioService.obtenerTodosLosUsuarios();
            return res.status(200).json(usuarios);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            return res.status(500).json({ error: 'Error al obtener usuarios.' });
        }
    }

    // Obtener un usuario por ID
    async obtenerUsuarioPorId(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const usuario = await UsuarioService.obtenerUsuarioPorId(id);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }

            return res.status(200).json(usuario);
        } catch (error) {
            console.error('Error al obtener usuario por ID:', error);
            return res.status(500).json({ error: 'Error al obtener usuario por ID.' });
        }
    }

    // Crear un nuevo usuario
    async nuevoUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoUsuario = await UsuarioService.nuevoUsuario(req.body);
            return res.status(201).json(nuevoUsuario);
        } catch (error) {
            console.error('Error al crear usuario:', error);
            return res.status(500).json({ error: 'Error al crear usuario.' });
        }
    }

    // Actualizar un usuario por ID
    async actualizarUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const [cantidad, usuariosActualizados] = await UsuarioService.actualizarUsuario(id, req.body);

            if (cantidad === 0) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }

            return res.status(200).json(usuariosActualizados);
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            return res.status(500).json({ error: 'Error al actualizar usuario.' });
        }
    }

    // Eliminar un usuario por ID
    async eliminarUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const resultado = await UsuarioService.eliminarUsuario(id);

            if (resultado === 0) {
                return res.status(404).json({ message: 'Usuario no encontrado.' });
            }

            return res.status(204).send(); // No devuelve contenido, pero indica éxito
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            return res.status(500).json({ error: 'Error al eliminar usuario.' });
        }
    }
}

export default new UsuarioController();
