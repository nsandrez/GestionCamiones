import proyectoCamionModel, { proyectoCamionAtributosCreacion } from '../models/proyectoCamionModel';

class proyectoCamionService {
    // Obtener todas las relaciones camion-proyecto
    async obtenerTodosCamionProyecto(): Promise<proyectoCamionModel[]> {
        return await proyectoCamionModel.findAll();
    }

    // Obtener una relación camion-proyecto por ID
    async obtenerPorIdCamionProyecto(id: number): Promise<proyectoCamionModel | null> {
        return await proyectoCamionModel.findByPk(id);
    }

    // Crear una nueva relación camion-proyecto
    async nuevoCamionProyecto(data: proyectoCamionAtributosCreacion): Promise<proyectoCamionModel> {
        try {
            return await proyectoCamionModel.create(data);
        } catch (error) {
            console.error('Error al crear la relación camion-proyecto:', error);
            throw new Error('No se pudo crear la relación camion-proyecto.');
        }
    }

    // Actualizar una relación camion-proyecto existente
    async actualizarCamionProyecto(id: number, data: Partial<proyectoCamionAtributosCreacion>): Promise<proyectoCamionModel> {
        try {
            const [filasActualizadas, [registroActualizado]] = await proyectoCamionModel.update(data, {
                where: { id },
                returning: true, // Devuelve el registro actualizado
            });

            if (filasActualizadas === 0) {
                throw new Error('Relación camion-proyecto no encontrada.');
            }

            return registroActualizado;
        } catch (error) {
            console.error('Error al actualizar la relación camion-proyecto:', error);
            throw new Error('No se pudo actualizar la relación camion-proyecto.');
        }
    }

    // Eliminar una relación camion-proyecto
    async eliminarCamionProyecto(id: number): Promise<void> {
        try {
            const filasEliminadas = await proyectoCamionModel.destroy({ where: { id } });

            if (filasEliminadas === 0) {
                throw new Error('Relación camion-proyecto no encontrada.');
            }
        } catch (error) {
            console.error('Error al eliminar la relación camion-proyecto:', error);
            throw new Error('No se pudo eliminar la relación camion-proyecto.');
        }
    }
}

export default new proyectoCamionService();
