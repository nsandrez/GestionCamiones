import CamionModel, { CamionAtributosCreacion } from '../models/camion';

class CamionService {
    // Obtener todos los camiones
    async obtenerTodosLosCamiones(): Promise<CamionModel[]> {
        return await CamionModel.findAll();
    }

    // Obtener un camion por ID
    async obtenerCamionPorId(id: number): Promise<CamionModel | null> {
        return await CamionModel.findByPk(id);
    }

    // Crear un nuevo camion
    async nuevoCamion(data: CamionAtributosCreacion): Promise<CamionModel> {
        try {
            return await CamionModel.create(data);
        } catch (error) {
            console.error('Error al crear el camión:', error);
            throw new Error('No se pudo crear el camión.');
        }
    }

    // Actualizar un camion
    async actualizarCamion(id: number, data: Partial<CamionModel>): Promise<[number, CamionModel[]]> {
        try {
            const resultado = await CamionModel.update(data, {
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
            const resultado = await CamionModel.destroy({ where: { id } });
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

export default new CamionService();
