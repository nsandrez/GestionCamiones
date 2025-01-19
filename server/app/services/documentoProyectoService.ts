import documentoProyectoModel, { documentoProyectoAtributosCreacion } from '../models/documentoProyectoModel';

class proyectoConductorService {
    // Obtener todas las relaciones documento-proyecto
    async obtenerTodosDocumentosProyectos(): Promise<documentoProyectoModel[]> {
        return await documentoProyectoModel.findAll();
    }

    // Obtener una relación documento-proyecto por ID
    async obtenerPorIdDocumentoProyecto(id: number): Promise<documentoProyectoModel | null> {
        return await documentoProyectoModel.findByPk(id);
    }

    // Crear una nueva relación documento-proyecto
    async nuevoDocumentoProyecto(data: documentoProyectoAtributosCreacion): Promise<documentoProyectoModel> {
        try {
            return await documentoProyectoModel.create(data);
        } catch (error) {
            console.error('Error al crear la relación documento-proyecto:', error);
            throw new Error('No se pudo crear la relación documento-proyecto.');
        }
    }

    // Actualizar una relación documento-proyecto existente
    async actualizarDocumentoProyecto(id: number, data: Partial<documentoProyectoAtributosCreacion>): Promise<documentoProyectoModel> {
        try {
            const [filasActualizadas, [registroActualizado]] = await documentoProyectoModel.update(data, {
                where: { id },
                returning: true, // Devuelve el registro actualizado
            });

            if (filasActualizadas === 0) {
                throw new Error('Relación documento-proyecto no encontrada.');
            }

            return registroActualizado;
        } catch (error) {
            console.error('Error al actualizar la relación documento-proyecto:', error);
            throw new Error('No se pudo actualizar la relación documento-proyecto.');
        }
    }

    // Eliminar una relación documento-proyecto
    async eliminarDocumentoProyecto(id: number): Promise<void> {
        try {
            const filasEliminadas = await documentoProyectoModel.destroy({ where: { id } });

            if (filasEliminadas === 0) {
                throw new Error('Relación documento-proyecto no encontrada.');
            }
        } catch (error) {
            console.error('Error al eliminar la relación documento-proyecto:', error);
            throw new Error('No se pudo eliminar la relación documento-proyecto.');
        }
    }
}

export default new proyectoConductorService();
