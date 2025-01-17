import camionModel, { camionAtributosCreacion } from '../models/camionModel';

class camionService {
    // Obtener todos los camiones
    async obtenerTodosLosCamiones(): Promise<camionModel[]> {
        return await camionModel.findAll();
    }

    // Obtener un camion por ID
    async obtenerCamionPorId(id: number): Promise<camionModel | null> {
        return await camionModel.findByPk(id);
    }

    // Crear un nuevo camion
    async nuevoCamion(data: camionAtributosCreacion): Promise<camionModel> {
        try {
            return await camionModel.create(data);
        } catch (error) {
            console.error('Error al crear el camión:', error);
            throw new Error('No se pudo crear el camión.');
        }
    }

    // Actualizar un camion
    async actualizarCamion(id: number, data: Partial<camionModel>): Promise<[number, camionModel[]]> {
        try {
            const resultado = await camionModel.update(data, {
                where: { id },
                returning: true, 
            });

            if (resultado[0] === 0) {
                throw new Error('Camión no encontrado.');
            }

            return resultado;
        } catch (error) {
            console.error('Error al actualizar el camión:', error);
            throw new Error('No se pudo actualizar el camión.');
        }
    }

    // Eliminar un camion
    async eliminarCamion(id: number): Promise<number> {
        try {
            const resultado = await camionModel.destroy({ where: { id } });
            if (resultado === 0) {
                throw new Error('Camión no encontrado.');
            }
            return resultado;
        } catch (error) {
            console.error('Error al eliminar el camión:', error);
            throw new Error('No se pudo eliminar el camión.');
        }
    }
}

export default new camionService();
