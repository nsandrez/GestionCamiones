import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const conexion = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,       
    process.env.DB_PASSWORD as string,   
    {
        host: process.env.DB_HOST,       
        port: Number(process.env.DB_PORT), 
        dialect: 'mysql',                
        logging: false,                  
    }
);

// Probar la conexión
conexion.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa.'))
    .catch((error) => console.error('Error al conectar a la base de datos:', error));

export default conexion;
