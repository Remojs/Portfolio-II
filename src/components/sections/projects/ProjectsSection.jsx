import styles from './ProjectsSection.module.css';
// Importar las imágenes de los proyectos
import bresserImg from '../../../assets/pages/bresser-page.webp';
import cervantesImg from '../../../assets/pages/cervantes-page.webp';
import cruzdelsurImg from '../../../assets/pages/cruzdelsur.webp';
import geocxImg from '../../../assets/pages/geocx-page.webp';
import gftaImg from '../../../assets/pages/gfta-page.webp';
import merakiImg from '../../../assets/pages/meraki-page.webp';
import pentacraftImg from '../../../assets/pages/pentacraft.webp';
import pinochueco from '../../../assets/pages/pinochueco-page.webp';
import pokelandingImg from '../../../assets/pages/pokelanding-page.webp';
import remocarsImg from '../../../assets/pages/remocars.webp';
import rickverseImg from '../../../assets/pages/rickverse-page.webp';
import shevaImg from '../../../assets/pages/sheva-page.webp';
import steelImg from '../../../assets/pages/steel-page.webp';
import talentforgeImg from '../../../assets/pages/talentforge-page.webp';
import taskifyImg from '../../../assets/pages/taskify-page.webp';
import lanpartyImg from '../../../assets/pages/lan-party.webp';
import ipmImg from '../../../assets/pages/ipm.webp';
import boniImg from '../../../assets/pages/boni.webp';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'PokéLanding',
      description: 'Una Pokédex moderna con diseño retro Game Boy, construida en React. Incluye búsqueda global, filtros por tipo, 9 temas dinámicos, infinite scroll y efectos 8-bit auténticos.',
      image: pokelandingImg,
      technologies: ['JavaScript', 'React', 'Vite', 'CSS Modules', 'PostCSS', 'React Query', 'API Propia'],
      liveUrl: 'https://pokelandingg.vercel.app',
      codeUrl: 'https://github.com/Remojs/Pokelanding'
    },
    {
      id: 2,
      title: 'Taskify',
      description: 'Modulo de gestion de tareas independiente, con conexion a calendar y a todoist, escalable y modular para aplicar a mis proyectos',
      image: taskifyImg,
      technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Shadcn-ui', 'Google Cloud', 'OAuth', 'Supabase'],
      liveUrl: 'https://trytaskify.vercel.app',
      codeUrl: 'https://github.com/Remojs/Taskify'
    },
    {
      id: 3,
      title: 'TalentForge',
      description: 'Plataforma de cursos para proyecto final de cursada, con gestion de cuentas, panel de administracion, pagos con mercado pago y hosting de multimedia en cloudinary.',
      image: talentforgeImg,
      technologies: ['Javascript', 'React', 'Redux', 'Tailwind', 'Cloudinary', 'Firebase', 'Mercado Pago', 'Node.js', 'Express', 'MongoDB', ],
      liveUrl: 'https://github.com/Remojs/Talent-Forge-Frontend',
      codeUrl: 'https://github.com/Remojs/Talent-Forge-Backend'
    },
    {
      id: 4,
      title: 'Rickverse',
      description: 'Aplicación web interactiva basada en la serie Rick y Morty, que permite explorar personajes, episodios y locaciones del multiverso.',
      image: rickverseImg,
      technologies: ['Javascript', 'React', 'Redux', 'CSS', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://rickverse.vercel.app',
      codeUrl: 'https://github.com/Remojs/Rickverse-Frontend'
    },
    {
      id: 5,
      title: 'Meraki Agency',
      description: 'Página profesional que presenta servicios, portfolio y contacto de MERAKI, con diseño responsivo, animaciones y enfoque en marketing digital.',
      image: merakiImg,
      technologies: ['Javascript', 'React', 'Vite','CSS Modules', 'EmailJS'],
      liveUrl: 'https://merakiagency.vercel.app',
      codeUrl: 'https://github.com/Remojs/Meraki-publicidad'
    },
    {
      id: 6,
      title: 'Gotta Fetch Them All',
      description: 'Pagina oficial de mi API de pokemon, contiene la documentacion acerca de los endpoints de la API y como colaborar desde github.',
      image: gftaImg,
      technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
      liveUrl: 'https://gftapage.vercel.app',
      codeUrl: 'https://github.com/Remojs/GottaFetchThemAll-Landing'
    },
    {
      id: 7,
      title: 'Cervantes Estudio Juridico',
      description: 'Pagina oficial de importante firma de abogados en mexico, con referencias a casos de exito y formulario de contacto.',
      image: cervantesImg,
      technologies: ['Typescript', 'React', 'CSS Modules', 'Scroll Animation', 'EmailJS', ],
      liveUrl: 'https://cervantes-murex.vercel.app',
      codeUrl: 'https://github.com/Remojs/Cervantes'
    },
    {
      id: 8,
      title: 'Steel Games',
      description: 'Sitio web clon de Steam, API de Rawg y DB propia, realizado para proyecto de cursada (Solo visible en 1920px)',
      image: steelImg,
      technologies: ['Javascript', 'React', 'CSS', 'Rawg API', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
      liveUrl: 'https://github.com/Remojs/Steel-Games',
      codeUrl: 'https://github.com/Remojs/Steel-Games'
    },
    {
      id: 9,
      title: 'Bresser LKV',
      description: 'Tienda online orientada al rubro de mecanica de camiones de importante empresa de autopartes alemana, con carrusel y detalle de productos, tablas de administracion y gestion de productos mediante intranet',
      image: bresserImg,
      technologies: ['Javascript', 'React', 'Redux', 'CSS Modules', 'Docker'],
      liveUrl: 'https://github.com/Remojs',
      codeUrl: 'https://github.com/Remojs'
    },
    {
      id: 10,
      title: 'GeoCX',
      description: 'Plataforma de gestion de personal de construccion, con geolocalizacion para check-in/check-out, gestion y creacion de incidencias, roles, gestion de cuentas, entre otros',
      image: geocxImg,
      technologies: ['TypeScript', 'Angular', 'CSS Modules', 'Websockets', 'PHP', 'Symfony', 'Stripe', 'Docker'],
      liveUrl: 'https://github.com/Remojs',
      codeUrl: 'https://github.com/Remojs'
    },
    {
      id: 11,
      title: 'Sheva Solutions',
      description: 'Tienda online de venta de equipos electronicos con gestion de productos, panel de ventas y visitas, cargas dinamicas, entre otros.',
      image: shevaImg,
       technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ssheva.com',
      codeUrl: 'https://github.com/Remojs'
    },
    {
      id: 12,
      title: 'Pinochueco',
      description: 'Aplicación web para parque de cabañas y glampings con galería de alojamientos, sistema de reservas y contacto.',
      image: pinochueco,
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://pinochueco.com',
      codeUrl: 'https://github.com/Remojs'
    },
    {
      id: 13,
      title: 'Mazamitla Sierra Tours',
      description: 'Plataforma de venta y gestion de turismo en las sierras de Mazamitla, en mexico, con gestion de tours, venta y alquiler de cabañas, gestion de usuarios y ventas mediante intranet, entre otros.',
      image: pinochueco,
      technologies: ['Javascript', 'React', 'Redux', 'CSS Modules', 'MercadoPago', 'Docker'],
      liveUrl: 'https://pinochueco.com',
      codeUrl: 'https://github.com/Remojs'
    },
    {
      id: 13,
      title: 'Cruz del Sur',
      description: 'Sitio web corporativo para empresa de logistica, recruiting, academy, vuelos y más, del mundo de la aviacion',
      image: cruzdelsurImg,
      technologies: ['React', 'CSS Modules', 'Scroll Animation'],
      liveUrl: 'https://cruzdelsur-aviacion.com',
      codeUrl: 'https://github.com/remojs/cruzdelsur'
    },
    {
      id: 14,
      title: 'PentaCraft Mod',
      description: 'Mod para Minecraft que añade nuevas mecánicas de juego, criaturas y biomas personalizados.',
      image: pentacraftImg,
      technologies: ['Fabric', 'Java', 'Minecraft Modding'],
      liveUrl: 'https://github.com/remojs/pentacraft-ores',
      codeUrl: 'https://github.com/remojs/pentacraft-ores'
    },
    {
      id: 15,
      title: 'RemoCars',
      description: 'Plataforma de alquiler de vehículos con sistema de reservas, geolocalización y gestión de flota.',
      image: remocarsImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
      liveUrl: 'https://remocars.vercel.app',
      codeUrl: 'https://github.com/remojs/remocars'
    },
    {
      id: 16,
      title: 'IPM',
      description: 'Landing page para importante empresa de venta de cintas de marcado para tuberias nauticas',
      image: ipmImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
      liveUrl: 'https://ipm-markings.vercel.app',
      codeUrl: 'https://github.com/remojs/remocars'
    },
    {
      id: 17,
      title: 'Lan Party II: Official Landing',
      description: 'Pagina de evento de gaming local, con lista de juegos, categoria, precios, copias y demas informacion',
      image: lanpartyImg,
      technologies: ['Javascript', 'React', 'CSS Modules'],
      liveUrl: 'https://lan-party-landing.vercel.app',
      codeUrl: 'https://github.com/Remojs/Lan-Party-Landing'
    },
    {
      id: 18,
      title: 'Boni Assistant',
      description: 'Landing page del Launch time, data y demas de BONI AI Assistant, el mejor asistente de IA del mercado',
      image: boniImg,
      technologies: ['Javascript', 'React', 'CSS Modules'],
      liveUrl: 'https://boniassistant.vercel.app',
      codeUrl: 'https://github.com/Remojs/Boni-AI'
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
