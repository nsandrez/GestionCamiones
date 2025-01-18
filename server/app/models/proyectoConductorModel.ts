import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface proyectoConductorAtributos {
    id: number;
    id_proyecto: number; 
    id_conductor: number; 
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type proyectoConductorAtributosCreacion = Optional<proyectoConductorAtributos, 'id'>;

class proyectoConductorModel extends Model<proyectoConductorAtributos, proyectoConductorAtributosCreacion> implements proyectoConductorAtributos {
    public id!: number;
    public id_proyecto!: number;
    public id_conductor!: number;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

proyectoConductorModel.init(
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
        id_conductor: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'conductores', 
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
        modelName: 'proyectoConductor',
        tableName: 'proyectos_conductores',
        timestamps: true,
        createdAt: 'fechaCreacion',
        updatedAt: 'ultimaActualizacion',
    }
);

export { proyectoConductorAtributosCreacion };
export default proyectoConductorModel;
