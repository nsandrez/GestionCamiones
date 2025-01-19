import CamionConductorModel, { CamionConductorAtributosCreacion } from '../models/camion-conductor';

class CamionConductorService {
    // Obtener todas las relaciones camion-conductor
    async obtenerTodosCamionConductor(): Promise<CamionConductorModel[]> {
        return await CamionConductorModel.findAll();
    }

    // Obtener una relación camion-conductor por ID
    async obtenerPorIdCamionConductor(id: number): Promise<CamionConductorModel | null> {
        return await CamionConductorModel.findByPk(id);
    }

    // Crear una nueva relación camion-conductor
    async nuevoCamionConductor(data: CamionConductorAtributosCreacion): Promise<CamionConductorModel> {
        try {
            return await CamionConductorModel.create(data);
        } catch (error) {
            console.error('Error al crear la relación camion-conductor:', error);
            throw new Error('No se pudo crear la relación camion-conductor.');
        }
    }

    // Actualizar una relación camion-conductor existente
    async actualizarCamionConductor(id: number, data: Partial<CamionConductorAtributosCreacion>): Promise<CamionConductorModel> {
        try {
            const [filasActualizadas, [registroActualizado]] = await CamionConductorModel.update(data, {
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
            const filasEliminadas = await CamionConductorModel.destroy({ where: { id } });

            if (filasEliminadas === 0) {
                throw new Error('Relación camion-conductor no encontrada.');
            }
        } catch (error) {
            console.error('Error al eliminar la relación camion-conductor:', error);
            throw new Error('No se pudo eliminar la relación camion-conductor.');
        }
    }
}

export default new CamionConductorService();
