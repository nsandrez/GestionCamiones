import usuarioModel, { usuarioAtributosCreacion } from '../models/usuarioModel';

class usuarioService {
    // Obtener todos los usuarios
    async obtenerTodosLosUsuarios(): Promise<usuarioModel[]> {
        return await usuarioModel.findAll();
    }

    // Obtener un usuario por ID
    async obtenerUsuarioPorId(id: number): Promise<usuarioModel | null> {
        return await usuarioModel.findByPk(id);
    }

    // Crear un nuevo usuario
    async nuevoUsuario(data: usuarioAtributosCreacion): Promise<usuarioModel> {
        try {
            return await usuarioModel.create(data);
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            throw new Error('No se pudo crear el usuario.');
        }
    }

    // Actualizar un usuario
    async actualizarUsuario(id: number, data: Partial<usuarioModel>): Promise<[number, usuarioModel[]]> {
        try {
            const resultado = await usuarioModel.update(data, {
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
            const resultado = await usuarioModel.destroy({ where: { id } });
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

export default new usuarioService();
