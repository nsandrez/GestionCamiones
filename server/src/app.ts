import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor.' });
});

export default app;
