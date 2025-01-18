import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface proyectoCamionAtributos {
    id: number;
    id_proyecto: number; 
    id_camion: number; 
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type proyectoCamionAtributosCreacion = Optional<proyectoCamionAtributos, 'id'>;

class proyectoCamionModel extends Model<proyectoCamionAtributos, proyectoCamionAtributosCreacion> implements proyectoCamionAtributos {
    public id!: number;
    public id_proyecto!: number;
    public id_camion!: number;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

proyectoCamionModel.init(
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
        id_camion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: 'camiones', 
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
        modelName: 'proyectoCamion',
        tableName: 'proyectos_camiones',
        timestamps: true,
        createdAt: 'fechaCreacion',
        updatedAt: 'ultimaActualizacion',
    }
);

export { proyectoCamionAtributosCreacion };
export default proyectoCamionModel;
