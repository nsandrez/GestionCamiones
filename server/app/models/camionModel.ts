import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface camionAtributos {
    id: number;
    patente: string;
    marca: string;
    modelo: string;
    anio: number;
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type camionAtributosCreacion = Optional<camionAtributos, 'id'>;

class CamionModel extends Model<camionAtributos, camionAtributosCreacion> implements camionAtributos {
    public id!: number;
    public patente!: string;
    public marca!: string;
    public modelo!: string;
    public anio!: number;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

CamionModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        patente: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        anio: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        modelName: 'Camion', 
        tableName: 'camiones', 
        timestamps: true,
        createdAt: 'fechaCreacion', 
        updatedAt: 'ultimaActualizacion', 
    }
);

export { camionAtributosCreacion }; 
export default CamionModel;
