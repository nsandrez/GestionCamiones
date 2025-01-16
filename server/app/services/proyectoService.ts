import proyectoModel, { proyectoAtributosCreacion } from '../models/proyectoModel';

class proyectoService {
    // Obtener todos los proyectos
    async obtenerTodosLosProyectos(): Promise<proyectoModel[]> {
        return await proyectoModel.findAll();
    }

    // Obtener un proyecto por ID
    async obtenerProyectoPorId(id: number): Promise<proyectoModel | null> {
        return await proyectoModel.findByPk(id);
    }

    // Crear un nuevo proyecto
    async nuevoProyecto(data: proyectoAtributosCreacion): Promise<proyectoModel> {
        try {
            return await proyectoModel.create(data);
        } catch (error) {
            console.error('Error al crear el proyecto:', error);
            throw new Error('No se pudo crear el proyecto.');
        }
    }

    // Actualizar un proyecto
    async actualizarProyecto(id: number, data: Partial<proyectoModel>): Promise<[number, proyectoModel[]]> {
        try {
            const resultado = await proyectoModel.update(data, {
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
            const resultado = await proyectoModel.destroy({ where: { id } });
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

export default new proyectoService();
