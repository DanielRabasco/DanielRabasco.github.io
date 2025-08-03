// js/main.js

// Función para crear partículas animadas
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particles.appendChild(particle);
    }
}

// Función para cargar los proyectos desde el backend
async function loadProjects() {
    try {
        // Asegúrate de que esta URL coincida con el puerto donde corre tu backend
        const response = await fetch('http://localhost:3000/api/projects');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        const projectsGrid = document.getElementById('projects-grid-container');

        projectsGrid.innerHTML = ''; // Limpia cualquier contenido existente

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-image">${project.image}</div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">Más Info</a>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });

    } catch (error) {
        console.error('Error al cargar los proyectos:', error);
        document.getElementById('projects-grid-container').innerHTML = '<p>No se pudieron cargar los proyectos. Inténtalo de nuevo más tarde.</p>';
    }
}

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fondo del encabezado al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 15, 35, 0.95)';
    } else {
        header.style.background = 'rgba(15, 15, 35, 0.9)';
    }
});

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section, .skill-card, .project-card').forEach(el => {
    observer.observe(el);
});

// Añadir efecto parallax a la sección hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Ejecutar funciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    createParticles(); // Inicializar partículas
    loadProjects();    // Cargar proyectos desde el backend
});