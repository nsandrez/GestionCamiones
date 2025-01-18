import proyectoConductorModel, { proyectoConductorAtributosCreacion } from '../models/proyectoConductorModel';

class proyectoConductorService {
    // Obtener todas las relaciones conductor-proyecto
    async obtenerTodosConductorProyecto(): Promise<proyectoConductorModel[]> {
        return await proyectoConductorModel.findAll();
    }

    // Obtener una relación conductor-proyecto por ID
    async obtenerPorIdConductorProyecto(id: number): Promise<proyectoConductorModel | null> {
        return await proyectoConductorModel.findByPk(id);
    }

    // Crear una nueva relación conductor-proyecto
    async nuevoConductorProyecto(data: proyectoConductorAtributosCreacion): Promise<proyectoConductorModel> {
        try {
            return await proyectoConductorModel.create(data);
        } catch (error) {
            console.error('Error al crear la relación conductor-proyecto:', error);
            throw new Error('No se pudo crear la relación conductor-proyecto.');
        }
    }

    // Actualizar una relación conductor-proyecto existente
    async actualizarConductorProyecto(id: number, data: Partial<proyectoConductorAtributosCreacion>): Promise<proyectoConductorModel> {
        try {
            const [filasActualizadas, [registroActualizado]] = await proyectoConductorModel.update(data, {
                where: { id },
                returning: true, // Devuelve el registro actualizado
            });

            if (filasActualizadas === 0) {
                throw new Error('Relación conductor-proyecto no encontrada.');
            }

            return registroActualizado;
        } catch (error) {
            console.error('Error al actualizar la relación conductor-proyecto:', error);
            throw new Error('No se pudo actualizar la relación conductor-proyecto.');
        }
    }

    // Eliminar una relación conductor-proyecto
    async eliminarConductorProyecto(id: number): Promise<void> {
        try {
            const filasEliminadas = await proyectoConductorModel.destroy({ where: { id } });

            if (filasEliminadas === 0) {
                throw new Error('Relación conductor-proyecto no encontrada.');
            }
        } catch (error) {
            console.error('Error al eliminar la relación conductor-proyecto:', error);
            throw new Error('No se pudo eliminar la relación conductor-proyecto.');
        }
    }
}

export default new proyectoConductorService();
