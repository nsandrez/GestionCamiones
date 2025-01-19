import documentoModel, { DocumentoAtributosCreacion } from '../models/documentoModel';

class documentoService {
    // Obtener todos los documentos
    async obtenerTodosLosDocumentos(): Promise<documentoModel[]> {
        return await documentoModel.findAll();
    }

    // Obtener un documento por ID
    async obtenerDocumentoPorId(id: number): Promise<documentoModel | null> {
        return await documentoModel.findByPk(id);
    }

    // Crear un nuevo documento
    async nuevoDocumento(data: DocumentoAtributosCreacion): Promise<documentoModel> {
        try {
            return await documentoModel.create(data);
        } catch (error) {
            console.error('Error al crear el documento:', error);
            throw new Error('No se pudo crear el documento.');
        }
    }

    // Actualizar un documento
    async actualizarDocumento(id: number, data: Partial<documentoModel>): Promise<[number, documentoModel[]]> {
        try {
            const resultado = await documentoModel.update(data, {
                where: { id },
                returning: true, 
            });

            if (resultado[0] === 0) {
                throw new Error('documento no encontrado.');
            }

            return resultado;
        } catch (error) {
            console.error('Error al actualizar el documento:', error);
            throw new Error('No se pudo actualizar el documento.');
        }
    }

    // Eliminar un documento
    async eliminarDocumento(id: number): Promise<number> {
        try {
            const resultado = await documentoModel.destroy({ where: { id } });
            if (resultado === 0) {
                throw new Error('documento no encontrado.');
            }
            return resultado;
        } catch (error) {
            console.error('Error al eliminar el documento:', error);
            throw new Error('No se pudo eliminar el documento.');
        }
    }
}

export default new documentoService();
