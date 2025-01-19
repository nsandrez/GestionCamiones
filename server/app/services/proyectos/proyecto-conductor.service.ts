import ProyectoConductorModel, { ProyectoConductorAtributosCreacion } from '../../models/proyectos/proyecto-conductor';

class ProyectoConductorService {
    // Obtener todas las relaciones conductor-proyecto
    async obtenerTodosConductorProyecto(): Promise<ProyectoConductorModel[]> {
        return await ProyectoConductorModel.findAll();
    }

    // Obtener una relación conductor-proyecto por ID
    async obtenerPorIdConductorProyecto(id: number): Promise<ProyectoConductorModel | null> {
        return await ProyectoConductorModel.findByPk(id);
    }

    // Crear una nueva relación conductor-proyecto
    async nuevoConductorProyecto(data: ProyectoConductorAtributosCreacion): Promise<ProyectoConductorModel> {
        try {
            return await ProyectoConductorModel.create(data);
        } catch (error) {
            console.error('Error al crear la relación conductor-proyecto:', error);
            throw new Error('No se pudo crear la relación conductor-proyecto.');
        }
    }

    // Actualizar una relación conductor-proyecto existente
    async actualizarConductorProyecto(id: number, data: Partial<ProyectoConductorAtributosCreacion>): Promise<ProyectoConductorModel> {
        try {
            const [filasActualizadas, [registroActualizado]] = await ProyectoConductorModel.update(data, {
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
            const filasEliminadas = await ProyectoConductorModel.destroy({ where: { id } });

            if (filasEliminadas === 0) {
                throw new Error('Relación conductor-proyecto no encontrada.');
            }
        } catch (error) {
            console.error('Error al eliminar la relación conductor-proyecto:', error);
            throw new Error('No se pudo eliminar la relación conductor-proyecto.');
        }
    }
}

export default new ProyectoConductorService();
