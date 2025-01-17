import conductorModel, { conductorAtributosCreacion } from '../models/conductorModel';

class conductorService {
    // Obtener todos los conductores
    async obtenerTodosLosConductores(): Promise<conductorModel[]> {
        return await conductorModel.findAll();
    }

    // Obtener un conductor por ID
    async obtenerConductorPorId(id: number): Promise<conductorModel | null> {
        return await conductorModel.findByPk(id);
    }

    // Crear un nuevo conductor
    async nuevoConductor(data: conductorAtributosCreacion): Promise<conductorModel> {
        try {
            return await conductorModel.create(data);
        } catch (error) {
            console.error('Error al crear el conductor:', error);
            throw new Error('No se pudo crear el conductor.');
        }
    }

    // Actualizar un conductor
    async actualizarConductor(id: number, data: Partial<conductorModel>): Promise<[number, conductorModel[]]> {
        try {
            const resultado = await conductorModel.update(data, {
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
            const resultado = await conductorModel.destroy({ where: { id } });
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

export default new conductorService();
