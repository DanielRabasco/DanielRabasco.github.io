// backend/server.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());
app.use(cors());

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Comprobar la conexión a la base de datos
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error al conectar a la base de datos:', err.stack);
  }
  console.log('Conectado a la base de datos PostgreSQL.');
  release();
});

// Middleware para servir archivos estáticos
// Sirve todos los archivos de la raíz del proyecto.
// Es crucial que el volumen en docker-compose.yml esté configurado como `.:/app`
// para que esta ruta funcione correctamente dentro del contenedor.
const projectRoot = path.join(__dirname, '..');
app.use(express.static(projectRoot));

// Rutas para tu API
app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener proyectos:', err);
    res.status(500).send('Error del servidor');
  }
});

// Rutas para servir tu portfolio HTML
app.get('/', (req, res) => {
  // Sirve el archivo index.html que está en la raíz del proyecto.
  res.sendFile(path.join(projectRoot, 'index.html'));
});

// Iniciar el servidor Express
app.listen(PORT, () => {
  console.log(`Servidor Express ejecutándose en http://localhost:${PORT}`);
  console.log('Tu portfolio está disponible en la misma dirección.');
});