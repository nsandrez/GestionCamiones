import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface DocumentoAtributos {
    id: number;
    nombre: string;
    descripcion: string;
    tipo: 'Camion' | 'Conductor'; // ENUM con los tipos permitidos
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type DocumentoAtributosCreacion = Optional<DocumentoAtributos, 'id'>;

class DocumentoModel extends Model<DocumentoAtributos, DocumentoAtributosCreacion> implements DocumentoAtributos {
    public id!: number;
    public nombre!: string;
    public descripcion!: string;
    public tipo!: 'Camion' | 'Conductor'; // Campo ENUM

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

DocumentoModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tipo: {
            type: DataTypes.ENUM('Camion', 'Conductor'), // Declaración del ENUM
            allowNull: false,
        },
        fechaCreacion: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        ultimaActualizacion: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize: conexion,
        modelName: 'Documento', // Nombre del modelo
        tableName: 'documentos', // Nombre de la tabla
        timestamps: true,
        createdAt: 'fechaCreacion', // Alias para `createdAt`
        updatedAt: 'ultimaActualizacion', // Alias para `updatedAt`
    }
);

export { DocumentoAtributosCreacion }; 
export default DocumentoModel;
