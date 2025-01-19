import ConductorModel, { ConductorAtributosCreacion } from '../models/conductor';

class ConductorService {
    // Obtener todos los conductores
    async obtenerTodosLosConductores(): Promise<ConductorModel[]> {
        return await ConductorModel.findAll();
    }

    // Obtener un conductor por ID
    async obtenerConductorPorId(id: number): Promise<ConductorModel | null> {
        return await ConductorModel.findByPk(id);
    }

    // Crear un nuevo conductor
    async nuevoConductor(data: ConductorAtributosCreacion): Promise<ConductorModel> {
        try {
            return await ConductorModel.create(data);
        } catch (error) {
            console.error('Error al crear el conductor:', error);
            throw new Error('No se pudo crear el conductor.');
        }
    }

    // Actualizar un conductor
    async actualizarConductor(id: number, data: Partial<ConductorModel>): Promise<[number, ConductorModel[]]> {
        try {
            const resultado = await ConductorModel.update(data, {
                where: { id },
                returning: true, 
            });

            if (resultado[0] === 0) {
                throw new Error('Conductor no encontrado.');
            }

            return resultado;
        } catch (error) {
            console.error('Error al actualizar el conductor:', error);
            throw new Error('No se pudo actualizar el conductor.');
        }
    }

    // Eliminar un conductor
    async eliminarConductor(id: number): Promise<number> {
        try {
            const resultado = await ConductorModel.destroy({ where: { id } });
            if (resultado === 0) {
                throw new Error('Conductor no encontrado.');
            }
            return resultado;
        } catch (error) {
            console.error('Error al eliminar el conductor:', error);
            throw new Error('No se pudo eliminar el conductor.');
        }
    }
}

export default new ConductorService();
