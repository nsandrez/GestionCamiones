import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenido a GestionCamiones API con TypeScript');
});

// Servidor escuchando
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
