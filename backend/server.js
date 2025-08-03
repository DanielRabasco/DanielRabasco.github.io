// backend/server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Define el puerto, usa 3000 por defecto

// --- Middleware para servir archivos estáticos ---
// Esto le dice a Express que sirva los archivos de tu frontend (HTML, CSS, JS)
// desde la carpeta raíz de tu proyecto de portfolio.
// `path.join(__dirname, '..')` apunta a la carpeta principal donde están index.html y styles.css.
app.use(express.static(path.join(__dirname, '..')));

// --- Rutas para servir tu portfolio HTML ---
// Sirve el archivo index.html cuando alguien accede a la raíz de tu servidor.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// --- Endpoint de la API para proyectos (¡aquí es donde irá la base de datos!) ---
// Por ahora, devolveremos datos estáticos para simular la base de datos.
app.get('/api/projects', (req, res) => {
    // Estos datos se "leerán" de tu base de datos más adelante.
    const projects = [
        {
            id: 'cognitive-games',
            image: '🧠',
            title: 'Cognitive Training Games',
            description: 'Development of 2D and 3D video games for cognitive assessment and training, fully integrated into a web platform using Angular. Built using Phaser and PlayCanvas, with real-time feedback systems and adaptive difficulty.',
            link: 'https://github.com/DanielRabasco/cognitive-games-repo' // Ejemplo de enlace a GitHub
        },
        {
            id: 'vr-training',
            image: '🕶️',
            title: 'VR Industrial Training System',
            description: 'Created a Virtual Reality system for training automotive seat assembly workers, using Unity and OptiTrack motion capture technology. The project was part of the SIEMA initiative for immersive industrial training.',
            link: 'https://github.com/DanielRabasco/vr-training-repo' // Ejemplo de enlace a GitHub
        },
        {
            id: 'platform-integration',
            image: '🔗',
            title: 'Platform Integration at CogniFit',
            description: 'Led software integrations with third-party platforms as a Product Manager. Coordinated cross-functional teams to ensure smooth interoperability and optimized data flow between systems.',
            link: 'https://github.com/DanielRabasco/platform-integration-repo' // Ejemplo de enlace a GitHub
        }
        // Puedes añadir más proyectos aquí
    ];
    res.json(projects); // Envía los proyectos como JSON
});

// --- Iniciar el servidor ---
app.listen(PORT, () => {
    console.log(`Servidor Express ejecutándose en http://localhost:${PORT}`);
    console.log('Tu portfolio está disponible en la misma dirección.');
});