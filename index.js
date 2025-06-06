import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './Api/routes/index.route.js';
import userRoutes from './Api/routes/user.route.js';
import "dotenv/config";

const app = express();

// Obtener __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la API bajo /api
app.use('/api', indexRoutes);
app.use('/api', userRoutes);

// Ruta raíz (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
const port = 8080;
app.listen(port, () => {
  console.log(`✅ Servidor corriendo en: http://127.0.0.1:${port}`);
});
