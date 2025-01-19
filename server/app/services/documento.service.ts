import DocumentoModel, { DocumentoAtributosCreacion } from '../models/documento';

class DocumentoService {
    // Obtener todos los documentos
    async obtenerTodosLosDocumentos(): Promise<DocumentoModel[]> {
        return await DocumentoModel.findAll();
    }

    // Obtener un documento por ID
    async obtenerDocumentoPorId(id: number): Promise<DocumentoModel | null> {
        return await DocumentoModel.findByPk(id);
    }

    // Crear un nuevo documento
    async nuevoDocumento(data: DocumentoAtributosCreacion): Promise<DocumentoModel> {
        try {
            return await DocumentoModel.create(data);
        } catch (error) {
            console.error('Error al crear el documento:', error);
            throw new Error('No se pudo crear el documento.');
        }
    }

    // Actualizar un documento
    async actualizarDocumento(id: number, data: Partial<DocumentoModel>): Promise<[number, DocumentoModel[]]> {
        try {
            const resultado = await DocumentoModel.update(data, {
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
            const resultado = await DocumentoModel.destroy({ where: { id } });
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

export default new DocumentoService();
