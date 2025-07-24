import styles from './ProjectsSection.module.css';
// Importar las imágenes de los proyectos
import bresserImg from '../../../assets/pages/bresser-page.png';
import cervantesImg from '../../../assets/pages/cervantes-page.png';
import geocxImg from '../../../assets/pages/geocx-page.png';
import gftaImg from '../../../assets/pages/gfta-page.png';
import merakiImg from '../../../assets/pages/meraki-page.png';
import pinochueco from '../../../assets/pages/pinochueco-page.png';
import pokelandingImg from '../../../assets/pages/pokelanding-page.png';
import rickverseImg from '../../../assets/pages/rickverse-page.png';
import shevaImg from '../../../assets/pages/sheva-page.png';
import steelImg from '../../../assets/pages/steel-page.png';
import talentforgeImg from '../../../assets/pages/talentforge-page.png';
import taskifyImg from '../../../assets/pages/taskify-page.png';
import pentacraftImg from '../../../assets/pages/pentacraft.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Taskify',
      description: 'Una aplicación de gestión de tareas con funcionalidad Kanban, que permite organizar proyectos, asignar responsables y realizar seguimiento de progreso.',
      image: taskifyImg,
      technologies: ['Node.js', 'React', 'CSS'],
      liveUrl: 'https://taskify-project.vercel.app',
      codeUrl: 'https://github.com/remojs/taskify'
    },
    {
      id: 2,
      title: 'TalentForge',
      description: 'Plataforma de gestión de talento empresarial que facilita la contratación, seguimiento y desarrollo profesional de los empleados.',
      image: talentforgeImg,
      technologies: ['Node.js', 'Angular', 'CSS'],
      liveUrl: 'https://talentforge.vercel.app',
      codeUrl: 'https://github.com/remojs/talentforge'
    },
    {
      id: 3,
      title: 'RickVerse',
      description: 'Aplicación web interactiva basada en la serie Rick y Morty, que permite explorar personajes, episodios y locaciones del multiverso.',
      image: rickverseImg,
      technologies: ['React', 'Rick & Morty API', 'CSS'],
      liveUrl: 'https://rickverse-explorer.vercel.app',
      codeUrl: 'https://github.com/remojs/rickverse'
    },
    {
      id: 4,
      title: 'Meraki Design Studio',
      description: 'Portafolio para un estudio de diseño con galería de proyectos, servicios ofrecidos y formulario de contacto para potenciales clientes.',
      image: merakiImg,
      technologies: ['React', 'CSS Modules', 'Figma'],
      liveUrl: 'https://meraki-design.vercel.app',
      codeUrl: 'https://github.com/remojs/meraki-design'
    },
    {
      id: 5,
      title: 'PokéLanding',
      description: 'Landing page interactiva de Pokémon que permite buscar y explorar información detallada sobre diferentes Pokémon y sus características.',
      image: pokelandingImg,
      technologies: ['React', 'API propia', 'CSS'],
      liveUrl: 'https://pokelanding.vercel.app',
      codeUrl: 'https://github.com/remojs/pokelanding'
    },
    {
      id: 6,
      title: 'GFTA Academy',
      description: 'Plataforma educativa para una academia de fútbol que incluye información sobre programas, entrenadores y sistema de inscripción para estudiantes.',
      image: gftaImg,
      technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
      liveUrl: 'https://gfta-academy.vercel.app',
      codeUrl: 'https://github.com/remojs/gfta-academy'
    },
    {
      id: 7,
      title: 'Cervantes Librería',
      description: 'E-commerce de librería con catálogo de libros, sistema de búsqueda, carrito de compras y pasarela de pagos integrada.',
      image: cervantesImg,
      technologies: ['React', 'CSS', 'Figma'],
      liveUrl: 'https://cervantes-libreria.vercel.app',
      codeUrl: 'https://github.com/remojs/cervantes-libreria'
    },
    {
      id: 8,
      title: 'Steel Games',
      description: 'Sitio web para un estudio de videojuegos con presentación de títulos, planes de suscripción y sistema de compras digitales.',
      image: steelImg,
      technologies: ['Node.js', 'MongoDB', 'React', 'CSS'],
      liveUrl: 'https://steel-games.vercel.app',
      codeUrl: 'https://github.com/remojs/steel-games'
    },
    {
      id: 9,
      title: 'Bresser LKV',
      description: 'Tienda online especializada en productos ópticos como telescopios, microscopios y binoculares con asesoramiento especializado.',
      image: bresserImg,
      technologies: ['Angular', 'Laravel'],
      liveUrl: 'https://bresser-lkv.vercel.app',
      codeUrl: 'https://github.com/remojs/bresser-lkv'
    },
    {
      id: 10,
      title: 'GeoCX Solutions',
      description: 'Sitio web corporativo para una empresa de soluciones geoespaciales con presentación de servicios, casos de éxito y blog técnico.',
      image: geocxImg,
      technologies: ['WebSockets', 'Angular', 'CSS', 'Laravel', 'PHP'],
      liveUrl: 'https://geocx-solutions.vercel.app',
      codeUrl: 'https://github.com/remojs/geocx-solutions'
    },
    {
      id: 11,
      title: 'Sheva Analytics',
      description: 'Dashboard de análisis de datos empresariales con visualizaciones interactivas, reportes personalizados y métricas de rendimiento.',
      image: shevaImg,
      technologies: ['Angular', 'Laravel', 'CSS Modules'],
      liveUrl: 'https://sheva-analytics.vercel.app',
      codeUrl: 'https://github.com/remojs/sheva-analytics'
    },
    {
      id: 12,
      title: 'Pinochueco',
      description: 'Aplicación web para un estudio de diseño de muebles artesanales con galería de productos, proceso de fabricación y sistema de cotización.',
      image: pinochueco,
      technologies: ['PHP', 'Symfony', 'HTML', 'CSS'],
      liveUrl: 'https://pinochueco-design.vercel.app',
      codeUrl: 'https://github.com/remojs/pinochueco'
    },
    {
      id: 13,
      title: 'Pentacraft',
      description: 'Mod de Minecraft con nuevos bloques, ítems y mecánicas de juego, centrado en la exploración y construcción.',
      image: pentacraftImg,
      technologies: ['Java', 'Fabric API'],
      liveUrl: 'https://pentacraft-mod.vercel.app',
      codeUrl: 'https://github.com/remojs/pentacraft'
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Grid Background */}
      <div className="gridBackground">
        <div className="gridPattern" />
      </div>
      
      <div className={styles.container}>
        <h2 className={`${styles.title} fadeIn`}>Proyectos</h2>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} fadeIn`} 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
              />
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.liveLink}`}
                  >
                    Demo en vivo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.codeLink}`}
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
