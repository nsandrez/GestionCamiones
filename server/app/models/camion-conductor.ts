import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface CamionConductorAtributos {
    id: number;
    id_camion: number; 
    id_conductor: number; 
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type CamionConductorAtributosCreacion = Optional<CamionConductorAtributos, 'id'>;

class CamionConductorModel extends Model<CamionConductorAtributos, CamionConductorAtributosCreacion> implements CamionConductorAtributos {
    public id!: number;
    public id_camion!: number;
    public id_conductor!: number;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

CamionConductorModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
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
        modelName: 'camionConductor',
        tableName: 'camiones_conductores',
        timestamps: true,
        createdAt: 'fechaCreacion',
        updatedAt: 'ultimaActualizacion',
    }
);

export { CamionConductorAtributosCreacion };
export default CamionConductorModel;
