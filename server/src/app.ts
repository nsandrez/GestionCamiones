import express from 'express';
import UsuarioRouter from '../app/routes/usuario.routes';
import ProyectoRouter from '../app/routes/proyecto.routes';
import ProyectoUsuarioRouter from '../app/routes/proyectos/proyecto-usuario.routes';
import CamionRouter from '../app/routes/camion.routes';
import ConductorRouter from '../app/routes/conductor.routes';
import ProyectoCamionRouter from '../app/routes/proyectos/proyecto-camion.routes';
import ProyectoConductorRouter from '../app/routes/proyectos/proyecto-conductor.routes';
import CamionConductorRouter from '../app/routes/camion-conductor.routes';
import DocumentoRouter from '../app/routes/documento.routes';
import DocumentoProyectoRouter from '../app/routes/proyectos/documento-proyecto.routes';


const app = express();

app.use(express.json()); // Middleware para manejar JSON
app.use('/api/usuarios', UsuarioRouter); // Conecta las rutas de usuarios
app.use('/api/proyectos', ProyectoRouter); // Conecta las rutas de proyectos
app.use('/api/proyectos-usuarios', ProyectoUsuarioRouter); // Conecta las rutas de relación usuario-proyecto
app.use('/api/camiones', CamionRouter); // Conecta las rutas de camion
app.use('/api/conductores', ConductorRouter); // Conecta las rutas de conductor
app.use('/api/proyecto-camiones', ProyectoCamionRouter); // Conecta las rutas de camion-proyecto
app.use('/api/proyecto-conductores', ProyectoConductorRouter); // Conecta las rutas de conductor-proyecto
app.use('/api/camiones-conductores', CamionConductorRouter); // Conecta las rutas de conductor-camion
app.use('/api/documentos', DocumentoRouter); // Conecta las rutas de documento
app.use('/api/documentos-proyectos', DocumentoProyectoRouter); // Conecta las rutas de documentos-proyecto


export default app; // Exporta la instancia de app como default
