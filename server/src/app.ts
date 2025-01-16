import express from 'express';
import usuarioRouter from '../app/routes/usuarioRoutes';
import proyectoRouter from '../app/routes/proyectoRoutes';
import proyectoUsuarioRoutes from '../app/routes/proyectoUsuarioRoutes';



const app = express();

app.use(express.json()); // Middleware para manejar JSON
app.use('/api/usuarios', usuarioRouter); // Conecta las rutas de usuarios
app.use('/api/proyectos', proyectoRouter); // Conecta las rutas de proyectos
app.use('/api/proyectos-usuarios', proyectoUsuarioRoutes); // Conecta las rutas de relación usuario-proyecto

export default app; // Exporta la instancia de app como default
