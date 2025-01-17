import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface conductorAtributos {
    id: number;
    nombre: string;
    apellido: string;
    nacionalidad: string;
    telefono: string;
    rut: string;
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type conductorAtributosCreacion = Optional<conductorAtributos, 'id'>;

class conductorModel extends Model<conductorAtributos, conductorAtributosCreacion> implements conductorAtributos {
    public id!: number;
    public nombre!: string;
    public apellido!: string;
    public nacionalidad!: string;
    public telefono!: string;
    public rut!: string;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

conductorModel.init(
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
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nacionalidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rut: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        modelName: 'Conductor', 
        tableName: 'conductores', 
        timestamps: true,
        createdAt: 'fechaCreacion', 
        updatedAt: 'ultimaActualizacion', 
    }
);

export { conductorAtributosCreacion }; 
export default conductorModel;
