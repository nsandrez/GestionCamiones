import proyectoUsuarioModel, { proyectoUsuarioAtributosCreacion } from '../models/proyectoUsuarioModel';

class proyectoUsuarioService {
    // Obtener todas las relaciones usuario-proyecto
    async obtenerTodosUsuarioProyecto(): Promise<proyectoUsuarioModel[]> {
        return await proyectoUsuarioModel.findAll();
    }

    // Obtener una relación usuario-proyecto por ID
    async obtenerPorIdUsuarioProyecto(id: number): Promise<proyectoUsuarioModel | null> {
        return await proyectoUsuarioModel.findByPk(id);
    }

    // Crear una nueva relación usuario-proyecto
    async nuevoUsuarioProyecto(data: proyectoUsuarioAtributosCreacion): Promise<proyectoUsuarioModel> {
        try {
            return await proyectoUsuarioModel.create(data);
        } catch (error) {
            console.error('Error al crear la relación usuario-proyecto:', error);
            throw new Error('No se pudo crear la relación usuario-proyecto.');
        }
    }

    // Actualizar una relación usuario-proyecto existente
    async actualizarUsuarioProyecto(id: number, data: Partial<proyectoUsuarioAtributosCreacion>): Promise<proyectoUsuarioModel> {
        try {
            const [filasActualizadas, [registroActualizado]] = await proyectoUsuarioModel.update(data, {
                where: { id },
                returning: true, // Devuelve el registro actualizado
            });

            if (filasActualizadas === 0) {
                throw new Error('Relación usuario-proyecto no encontrada.');
            }

            return registroActualizado;
        } catch (error) {
            console.error('Error al actualizar la relación usuario-proyecto:', error);
            throw new Error('No se pudo actualizar la relación usuario-proyecto.');
        }
    }

    // Eliminar una relación usuario-proyecto
    async eliminarUsuarioProyecto(id: number): Promise<void> {
        try {
            const filasEliminadas = await proyectoUsuarioModel.destroy({ where: { id } });

            if (filasEliminadas === 0) {
                throw new Error('Relación usuario-proyecto no encontrada.');
            }
        } catch (error) {
            console.error('Error al eliminar la relación usuario-proyecto:', error);
            throw new Error('No se pudo eliminar la relación usuario-proyecto.');
        }
    }
}

export default new proyectoUsuarioService();
