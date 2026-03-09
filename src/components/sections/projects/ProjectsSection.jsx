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
import alBahrImg from '../../../assets/pages/albahr.webp';
import intkImg from '../../../assets/pages/interaktive.webp';
import mazamitlaImg from '../../../assets/pages/mazamitla-page.webp';
import jjkapiImg from '../../../assets/pages/jjkapi.webp';
import redlsImg from '../../../assets/pages/redls.webp';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'PokéLanding',
      description: 'A modern Pokédex with a retro Game Boy design, built in React. Includes global search, filters by type, color themes, details, team creator, infinite scroll, and authentic 8-bit effects. Made with love for the franchise using my own API.',
      image: pokelandingImg,
      technologies: ['React', 'React Router', 'React Query', 'Vite', 'ESLint', 'CSS', 'Vercel', 'Render'],
      liveUrl: 'https://pokelanding-git-main-remojs-projects.vercel.app'
    },
    {
      id: 2,
      title: 'Taskify',
      description: 'Task management module built with feature-based architecture, designed to easily integrate into any project. Includes synchronization with Google Calendar, cloud persistence with Supabase, and an emergency mode with localStorage that guarantees availability in the event of connectivity failures.',
      image: taskifyImg,
      technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Shadcn-ui', 'Google Cloud', 'OAuth', 'Supabase'],
      liveUrl: 'https://trytaskify.vercel.app'
    },
    {
      id: 3,
      title: 'TalentForge',
      description: 'Course platform for final course projects, with account management, administration panel, Mercado Pago payments, and multimedia hosting on Cloudinary.',
      image: talentforgeImg,
      technologies: ['Javascript', 'React', 'Redux', 'Tailwind', 'Cloudinary', 'Firebase', 'Mercado Pago', 'Node.js', 'Express', 'MongoDB', ],
      liveUrl: 'https://github.com/Remojs/Talent-Forge-Frontend'
    },
    {
      id: 4,
      title: 'Rickverse',
      description: 'Interactive web application based on the Rick and Morty series, allowing users to explore characters, episodes, and locations in the multiverse.',
      image: rickverseImg,
      technologies: ['Javascript', 'React', 'Redux', 'CSS', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://rickverse.vercel.app'
    },
    {
      id: 5,
      title: 'Meraki Agency',
      description: 'Professional website presenting MERAKI\'s services, portfolio, and contact information, with responsive design, animations, and a focus on digital marketing.',
      image: merakiImg,
      technologies: ['Javascript', 'React', 'Vite','CSS Modules', 'EmailJS'],
      liveUrl: 'https://merakiagency.vercel.app'
    },
    {
      id: 6,
      title: 'Gotta Fetch Them All',
      description: 'Official page of my Pokémon API, containing documentation about the API endpoints and how to collaborate on GitHub.',
      image: gftaImg,
      technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
      liveUrl: 'https://gftapage.vercel.app'
    },
    {
      id: 7,
      title: 'Intreraktive Solutions',
      description: 'Official contact page for automation and web solutions company for startups and businesses',
      image: intkImg,
      technologies: ['Nextjs', 'Web Domain', 'Web Hosting', 'Mailing Services', 'SEO', 'Google Ads', 'Facebook Ads'],
      liveUrl: 'https://interaktivesolutions.com'
    },
    {
      id: 8,
      title: 'Steel Games',
      description: 'Steam clone website, Rawg API, and proprietary database, created for a course project (only visible at 1920px—created with exact measurements).',
      image: steelImg,
      technologies: ['Javascript', 'React', 'CSS', 'Rawg API', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
      liveUrl: 'https://steel-five.vercel.app/home'
    },
    {
      id: 9,
      title: 'Bresser LKV',
      description: 'Online store focused on truck mechanics for a major German auto parts company, with a carousel and product details, administration tables, and product management via intranet.',
      image: bresserImg,
      technologies: ['Javascript', 'React', 'Redux', 'CSS Modules', 'Docker'],
      liveUrl: 'https://github.com/Remojs'
    },
    {
      id: 10,
      title: 'GeoCX',
      description: 'Construction personnel management platform, with geolocation for check-in/check-out, incident management and creation, roles, account management, among others.',
      image: geocxImg,
      technologies: ['TypeScript', 'Angular', 'CSS Modules', 'Websockets', 'PHP', 'Symfony', 'Stripe', 'Docker'],
      liveUrl: 'https://geocx-mvp.vercel.app'
    },
    {
      id: 11,
      title: 'Jujutsu Kaisen API',
      description: 'Famous Anime "Jujutsu Kaisen" API with characters, battles, manga volumes, techniques, etc..',
      image: jjkapiImg,
       technologies: ['PHP', 'Laravel', 'Sqlite', 'Nextjs'],
      liveUrl: 'https://www.jujutsukaisenapi.site'
    },
    {
      id: 12,
      title: 'Pinochueco',
      description: 'Web application for a cabin and glamping park, featuring accommodation galleries, a booking system, and contact options.',
      image: pinochueco,
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://pinochueco.com'
    },
    {
      id: 13,
      title: 'Mazamitla Sierra Tours',
      description: 'Tourism sales and management platform in the Mazamitla mountains, Mexico, with tour management, cabin rental and sales, user management, and intranet-based sales, among others.',
      image: mazamitlaImg,
      technologies: ['Javascript', 'React', 'Redux', 'CSS Modules', 'Driver.js', 'MercadoPago', 'Docker'],
      liveUrl: 'https://www.mazamitlasierratours.com'
    },
    {
      id: 14,
      title: 'Cruz del Sur',
      description: 'Corporate website for an emerging aviation company, with sections for webinars, email management, and recruitment, among other areas.',
      image: cruzdelsurImg,
      technologies: ['React', 'CSS Modules', 'Scroll Animation', 'EmailJS'],
      liveUrl: 'https://cruzdelsur-aviacion.com'
    },
    {
      id: 15,
      title: 'Pentacraft Mod',
      description: 'Minecraft mod for version 1.16.5 that adds new gameplay mechanics, weapons, armor, 3D and pixel art designs, custom creatures, and biomes.',
      image: pentacraftImg,
      technologies: ['Fabric', 'Java', 'Minecraft Modding', '3D', 'Pixel Art'],
      liveUrl: 'https://github.com/Remojs/PentacraftOres-Mod'
    },
    {
      id: 16,
      title: 'Remocars',
      description: 'Artistic car gallery with animations and style.',
      image: remocarsImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
      liveUrl: 'https://remocars.vercel.app'
    },
    {
      id: 17,
      title: 'IPM Markings',
      description: 'Landing page for a major company selling marking tapes for nautical pipes.',
      image: ipmImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
      liveUrl: 'https://ipm-markings.vercel.app'
    },
    {
      id: 18,
      title: 'Lan Party II: Official Landing',
      description: 'Landing page for a local gaming event, featuring a list of games, categories, prices, copies, and other information.',
      image: lanpartyImg,
      technologies: ['Javascript', 'React', 'CSS Modules'],
      liveUrl: 'https://lan-party-landing.vercel.app'
    },
    {
      id: 19,
      title: 'Boni Assistant',
      description: 'Landing page for the launch time, data, and other information of BONI AI Assistant, the best AI assistant on the market.',
      image: boniImg,
      technologies: ['Javascript', 'React', 'CSS Modules', 'Scroll Animation'],
      liveUrl: 'https://boniassistant.vercel.app'
    },
    {
      id: 20,
      title: 'Al-Bahr',
      description: 'Landing page for a company that imports products from one of the most prestigious perfume houses in the Arab world.',
      image: alBahrImg,
      technologies: ['Javascript', 'React', 'CSS Modules', 'Scroll Animation'],
      liveUrl: 'https://al-bahr.vercel.app'
    },
    {
      id: 21,
      title: 'Cervantes Estudio Juridico',
      description: 'Official page of a prominent law firm in Mexico, with references to successful cases and a contact form.',
      image: cervantesImg,
      technologies: ['Typescript', 'React', 'CSS Modules', 'Scroll Animation', 'EmailJS', ],
      liveUrl: 'https://legalescervantes.vercel.app'
    },
    {
      id: 22,
      title: 'Sheva Solutions',
      description: 'Online store for electronic equipment sales with product management, sales and visit panels, dynamic uploads, among others.',
      image: shevaImg,
       technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ssheva.com'
    },{
      id: 23,
      title: 'Red LS Casino',
      description: 'Contact landing page and online casino redirect, with chip promotions and margins.',
      image: redlsImg,
       technologies: ['Nextjs', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://red-ls-casino.vercel.app'
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
                    View Page
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
