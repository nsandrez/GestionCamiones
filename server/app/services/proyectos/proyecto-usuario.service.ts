import ProyectoUsuarioModel, { ProyectoUsuarioAtributosCreacion } from '../../models/proyectos/proyecto-usuario';

class ProyectoUsuarioService {
    // Obtener todas las relaciones usuario-proyecto
    async obtenerTodosUsuarioProyecto(): Promise<ProyectoUsuarioModel[]> {
        return await ProyectoUsuarioModel.findAll();
    }

    // Obtener una relación usuario-proyecto por ID
    async obtenerPorIdUsuarioProyecto(id: number): Promise<ProyectoUsuarioModel | null> {
        return await ProyectoUsuarioModel.findByPk(id);
    }

    // Crear una nueva relación usuario-proyecto
    async nuevoUsuarioProyecto(data: ProyectoUsuarioAtributosCreacion): Promise<ProyectoUsuarioModel> {
        try {
            return await ProyectoUsuarioModel.create(data);
        } catch (error) {
            console.error('Error al crear la relación usuario-proyecto:', error);
            throw new Error('No se pudo crear la relación usuario-proyecto.');
        }
    }

    // Actualizar una relación usuario-proyecto existente
    async actualizarUsuarioProyecto(id: number, data: Partial<ProyectoUsuarioAtributosCreacion>): Promise<ProyectoUsuarioModel> {
        try {
            const [filasActualizadas, [registroActualizado]] = await ProyectoUsuarioModel.update(data, {
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
            const filasEliminadas = await ProyectoUsuarioModel.destroy({ where: { id } });

            if (filasEliminadas === 0) {
                throw new Error('Relación usuario-proyecto no encontrada.');
            }
        } catch (error) {
            console.error('Error al eliminar la relación usuario-proyecto:', error);
            throw new Error('No se pudo eliminar la relación usuario-proyecto.');
        }
    }
}

export default new ProyectoUsuarioService();
