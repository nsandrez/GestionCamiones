import express from 'express';
import usuarioRouter from '../app/routes/usuarioRoutes';
import proyectoRouter from '../app/routes/proyectoRoutes';
import proyectoUsuarioRouter from '../app/routes/proyectoUsuarioRoutes';
import camionRouter from '../app/routes/camionRoutes';


const app = express();

app.use(express.json()); // Middleware para manejar JSON
app.use('/api/usuarios', usuarioRouter); // Conecta las rutas de usuarios
app.use('/api/proyectos', proyectoRouter); // Conecta las rutas de proyectos
app.use('/api/proyectos-usuarios', proyectoUsuarioRouter); // Conecta las rutas de relación usuario-proyecto
app.use('/api/camiones', camionRouter); // Conecta las rutas de camion


export default app; // Exporta la instancia de app como default
