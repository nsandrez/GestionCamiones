import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt'; // Importa bcrypt
import conexion from '../../config/conexion';

interface usuarioAtributos {
    id: number;
    nombreCompleto: string;
    correo: string;
    clave: string;
    rol: string;
    estado: string;
    fechaCreacion: Date;
    ultimaActualizacion: Date;
}

type usuarioAtributosCreacion = Optional<usuarioAtributos, 'id'>;

class usuarioModel extends Model<usuarioAtributos, usuarioAtributosCreacion> implements usuarioAtributos {
    public id!: number;
    public nombreCompleto!: string;
    public correo!: string;
    public clave!: string;
    public rol!: string;
    public estado!: string;

    public readonly fechaCreacion!: Date;
    public readonly ultimaActualizacion!: Date;
}

usuarioModel.init(
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
        hooks: {
            // Hook para encriptar la clave antes de guardar
            beforeCreate: async (usuario: usuarioModel) => {
                if (usuario.clave) {
                    const salt = await bcrypt.genSalt(10);
                    usuario.clave = await bcrypt.hash(usuario.clave, salt);
                }
            },
            // Opcional: Hook para actualizar la clave si cambia
            beforeUpdate: async (usuario: usuarioModel) => {
                if (usuario.changed('clave')) {
                    const salt = await bcrypt.genSalt(10);
                    usuario.clave = await bcrypt.hash(usuario.clave, salt);
                }
            },
        },
    }
);

export { usuarioAtributosCreacion }; 
export default usuarioModel;
