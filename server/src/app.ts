import express from 'express';
import usuarioRouter from '../app/routes/usuarioRoutes';
import proyectoRouter from '../app/routes/proyectoRoutes';


const app = express();

app.use(express.json()); // Middleware para manejar JSON
app.use('/api/usuarios', usuarioRouter); // Conecta las rutas de usuarios
app.use('/api/proyectos', proyectoRouter); // Conecta las rutas de proyectos

export default app; // Exporta la instancia de app como default
