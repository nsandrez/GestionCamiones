import ProyectoModel, { ProyectoAtributosCreacion } from '../models/proyecto';

class ProyectoService {
    // Obtener todos los proyectos
    async obtenerTodosLosProyectos(): Promise<ProyectoModel[]> {
        return await ProyectoModel.findAll();
    }

    // Obtener un proyecto por ID
    async obtenerProyectoPorId(id: number): Promise<ProyectoModel | null> {
        return await ProyectoModel.findByPk(id);
    }

    // Crear un nuevo proyecto
    async nuevoProyecto(data: ProyectoAtributosCreacion): Promise<ProyectoModel> {
        try {
            return await ProyectoModel.create(data);
        } catch (error) {
            console.error('Error al crear el proyecto:', error);
            throw new Error('No se pudo crear el proyecto.');
        }
    }

    // Actualizar un proyecto
    async actualizarProyecto(id: number, data: Partial<ProyectoModel>): Promise<[number, ProyectoModel[]]> {
        try {
            const resultado = await ProyectoModel.update(data, {
                where: { id },
                returning: true, 
            });

            if (resultado[0] === 0) {
                throw new Error('Proyecto no encontrado.');
            }

            return resultado;
        } catch (error) {
            console.error('Error al actualizar el proyecto:', error);
            throw new Error('No se pudo actualizar el proyecto.');
        }
    }

    // Eliminar un proyecto
    async eliminarProyecto(id: number): Promise<number> {
        try {
            const resultado = await ProyectoModel.destroy({ where: { id } });
            if (resultado === 0) {
                throw new Error('Proyecto no encontrado.');
            }
            return resultado;
        } catch (error) {
            console.error('Error al eliminar el proyecto:', error);
            throw new Error('No se pudo eliminar el proyecto.');
        }
    }
}

export default new ProyectoService();
