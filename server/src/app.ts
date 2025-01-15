import express from 'express';
import usuarioRouter from '../app/routes/usuarioRoutes';

const app = express();

app.use(express.json()); // Middleware para manejar JSON
app.use('/api/usuarios', usuarioRouter); // Conecta las rutas de usuarios

export default app; // Exporta la instancia de app como default
