import camionConductorModel, { camionConductorAtributosCreacion } from '../models/camionConductorModel';

class camionConductorService {
    // Obtener todas las relaciones camion-conductor
    async obtenerTodosCamionConductor(): Promise<camionConductorModel[]> {
        return await camionConductorModel.findAll();
    }

    // Obtener una relación camion-conductor por ID
    async obtenerPorIdCamionConductor(id: number): Promise<camionConductorModel | null> {
        return await camionConductorModel.findByPk(id);
    }

    // Crear una nueva relación camion-conductor
    async nuevoCamionConductor(data: camionConductorAtributosCreacion): Promise<camionConductorModel> {
        try {
            return await camionConductorModel.create(data);
        } catch (error) {
            console.error('Error al crear la relación camion-conductor:', error);
            throw new Error('No se pudo crear la relación camion-conductor.');
        }
    }

    // Actualizar una relación camion-conductor existente
    async actualizarCamionConductor(id: number, data: Partial<camionConductorAtributosCreacion>): Promise<camionConductorModel> {
        try {
            const [filasActualizadas, [registroActualizado]] = await camionConductorModel.update(data, {
                where: { id },
                returning: true, // Devuelve el registro actualizado
            });

            if (filasActualizadas === 0) {
                throw new Error('Relación camion-conductor no encontrada.');
            }

            return registroActualizado;
        } catch (error) {
            console.error('Error al actualizar la relación camion-conductor:', error);
            throw new Error('No se pudo actualizar la relación camion-conductor.');
        }
    }

    // Eliminar una relación camion-conductor
    async eliminarCamionConductor(id: number): Promise<void> {
        try {
            const filasEliminadas = await camionConductorModel.destroy({ where: { id } });

            if (filasEliminadas === 0) {
                throw new Error('Relación camion-conductor no encontrada.');
            }
        } catch (error) {
            console.error('Error al eliminar la relación camion-conductor:', error);
            throw new Error('No se pudo eliminar la relación camion-conductor.');
        }
    }
}

export default new camionConductorService();
