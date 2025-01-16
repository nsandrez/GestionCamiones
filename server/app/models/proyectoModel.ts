import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface proyectoAtributos {
    id: number;
    nombre: string;
    descripcion: string;
    estado: string;
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type proyectoAtributosCreacion = Optional<proyectoAtributos, 'id'>;

class proyectoModel extends Model<proyectoAtributos, proyectoAtributosCreacion> implements proyectoAtributos {
    public id!: number;
    public nombre!: string;
    public descripcion!: string;
    public estado!: string;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

proyectoModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
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
        nombre: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Activo',
        },
    },
    {
        sequelize: conexion,
        modelName: 'Proyecto',
        tableName: 'proyectos',
        timestamps: true,
        createdAt: 'fechaCreacion',
        updatedAt: 'ultimaActualizacion',
    }
);

export { proyectoAtributosCreacion }; 
export default proyectoModel;
