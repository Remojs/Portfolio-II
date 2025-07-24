import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with product filtering, user authentication, cart functionality, and payment processing.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: 'https://example.com/ecommerce',
      codeUrl: 'https://github.com/remojs/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality, user collaboration, and real-time updates.',
      image: '/projects/taskmanager.jpg',
      technologies: ['React', 'Firebase', 'Redux', 'Material-UI'],
      liveUrl: 'https://example.com/taskmanager',
      codeUrl: 'https://github.com/remojs/taskmanager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data from multiple locations, with interactive maps and charts.',
      image: '/projects/weather.jpg',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
      liveUrl: 'https://example.com/weather',
      codeUrl: 'https://github.com/remojs/weather'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media platforms, tracking engagement metrics, follower growth, and content performance.',
      image: '/projects/socialmedia.jpg',
      technologies: ['React', 'D3.js', 'Node.js', 'OAuth'],
      liveUrl: 'https://example.com/socialmedia',
      codeUrl: 'https://github.com/remojs/socialmedia'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'A recipe application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine type.',
      image: '/projects/recipes.jpg',
      technologies: ['React', 'Spoonacular API', 'CSS Modules', 'Context API'],
      liveUrl: 'https://example.com/recipes',
      codeUrl: 'https://github.com/remojs/recipes'
    },
    {
      id: 6,
      title: 'Portfolio Template',
      description: 'A customizable portfolio template for developers and designers, featuring dark mode, animations, and responsive design.',
      image: '/projects/portfolio.jpg',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Vite'],
      liveUrl: 'https://example.com/portfolio',
      codeUrl: 'https://github.com/remojs/portfolio'
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Grid Background */}
      <div className="gridBackground">
        <div className="gridPattern" />
      </div>
      
      <div className={styles.container}>
        <h2 className={`${styles.title} fadeIn`}>Projects</h2>
        
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
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.codeLink}`}
                  >
                    View Code
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
