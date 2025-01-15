import app from './app'; 
import conexion from '../config/conexion'; 

const PORT = process.env.PORT || 3000; 

conexion
    .authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa.');

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('No se pudo conectar a la base de datos:', error);
    });
