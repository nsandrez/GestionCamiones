import UsuarioModel, { UsuarioAtributosCreacion } from '../models/usuario';

class UsuarioService {
    // Obtener todos los usuarios
    async obtenerTodosLosUsuarios(): Promise<UsuarioModel[]> {
        return await UsuarioModel.findAll();
    }

    // Obtener un usuario por ID
    async obtenerUsuarioPorId(id: number): Promise<UsuarioModel | null> {
        return await UsuarioModel.findByPk(id);
    }

    // Crear un nuevo usuario
    async nuevoUsuario(data: UsuarioAtributosCreacion): Promise<UsuarioModel> {
        try {
            return await UsuarioModel.create(data);
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            throw new Error('No se pudo crear el usuario.');
        }
    }

    // Actualizar un usuario
    async actualizarUsuario(id: number, data: Partial<UsuarioModel>): Promise<[number, UsuarioModel[]]> {
        try {
            const resultado = await UsuarioModel.update(data, {
                where: { id },
                returning: true, 
            });

            if (resultado[0] === 0) {
                throw new Error('Usuario no encontrado.');
            }

            return resultado;
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            throw new Error('No se pudo actualizar el usuario.');
        }
    }

    // Eliminar un usuario
    async eliminarUsuario(id: number): Promise<number> {
        try {
            const resultado = await UsuarioModel.destroy({ where: { id } });
            if (resultado === 0) {
                throw new Error('Usuario no encontrado.');
            }
            return resultado;
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            throw new Error('No se pudo eliminar el usuario.');
        }
    }
}

export default new UsuarioService();
