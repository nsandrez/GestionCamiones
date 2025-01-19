import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface ProyectoAtributos {
    id: number;
    nombre: string;
    descripcion: string;
    estado: string;
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type ProyectoAtributosCreacion = Optional<ProyectoAtributos, 'id'>;

class ProyectoModel extends Model<ProyectoAtributos, ProyectoAtributosCreacion> implements ProyectoAtributos {
    public id!: number;
    public nombre!: string;
    public descripcion!: string;
    public estado!: string;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

ProyectoModel.init(
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

export { ProyectoAtributosCreacion }; 
export default ProyectoModel;
