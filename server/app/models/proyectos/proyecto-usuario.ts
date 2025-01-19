import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../../config/conexion';

interface ProyectoUsuarioAtributos {
    id: number;
    id_proyecto: number; 
    id_usuario: number; 
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type ProyectoUsuarioAtributosCreacion = Optional<ProyectoUsuarioAtributos, 'id'>;

class ProyectoUsuarioModel extends Model<ProyectoUsuarioAtributos, ProyectoUsuarioAtributosCreacion> implements ProyectoUsuarioAtributos {
    public id!: number;
    public id_proyecto!: number;
    public id_usuario!: number;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

ProyectoUsuarioModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
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
        id_usuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'usuarios', 
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
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
        modelName: 'proyectoUsuario',
        tableName: 'usuarios_proyectos',
        timestamps: true,
        createdAt: 'fechaCreacion',
        updatedAt: 'ultimaActualizacion',
    }
);

export { ProyectoUsuarioAtributosCreacion };
export default ProyectoUsuarioModel;
