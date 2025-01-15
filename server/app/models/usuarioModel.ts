import { DataTypes, Model, Optional } from 'sequelize';
import conexion from '../../config/conexion';

interface UsuarioAtributos {
    id: number;
    nombreCompleto: string;
    correo: string;
    clave: string;
    rol: string;
    estado: string;
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type UsuarioAtributosCreacion = Optional<UsuarioAtributos, 'id'>;

class UsuarioModel extends Model<UsuarioAtributos, UsuarioAtributosCreacion> implements UsuarioAtributos {
    public id!: number;
    public nombreCompleto!: string;
    public correo!: string;
    public clave!: string;
    public rol!: string;
    public estado!: string;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

UsuarioModel.init(
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
        nombreCompleto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        clave: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Usuario', 
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Activo',
        },
    },
    {
        sequelize: conexion,
        modelName: 'Usuario',
        tableName: 'usuarios',
        timestamps: true,
        createdAt: 'fechaCreacion',
        updatedAt: 'ultimaActualizacion',
    }
);

export { UsuarioAtributosCreacion }; 
export default UsuarioModel;
