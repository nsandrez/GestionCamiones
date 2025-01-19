import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../../config/conexion';

interface DocumentoProyectoAtributos {
    id: number;
    id_documento: number;
    id_proyecto: number;
    id_camion: number;
    id_conductor: number; 
    url_archivo: string;
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type DocumentoProyectoAtributosCreacion = Optional<DocumentoProyectoAtributos, 'id'>;

class DocumentoProyectoModel
    extends Model<DocumentoProyectoAtributos, DocumentoProyectoAtributosCreacion>
    implements DocumentoProyectoAtributos
{
    public id!: number;
    public id_documento!: number;
    public id_proyecto!: number;
    public id_camion!: number;
    public id_conductor!: number; 
    public url_archivo!: string;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

DocumentoProyectoModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        id_documento: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'documentos', 
                key: 'id_documento',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        id_proyecto: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'proyectos',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        id_camion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: 'camiones',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
        id_conductor: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: 'conductores',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
        url_archivo: {
            type: DataTypes.STRING,
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
        modelName: 'DocumentoProyecto',
        tableName: 'documentos_proyectos',
        timestamps: true,
        createdAt: 'fechaCreacion',
        updatedAt: 'ultimaActualizacion',
    }
);

export { DocumentoProyectoAtributosCreacion };
export default DocumentoProyectoModel;
