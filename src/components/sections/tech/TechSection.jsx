import styles from './TechSection.module.css';

const TechSection = () => {
  // Technology icons mapping
  const techIcons = {
    // Frontend
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    
    // Backend
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'JAVA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    
    // Tools
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'Copilot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', // Using GitHub icon as placeholder for Copilot
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    'Photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
  };

  const technologies = {
    frontend: [
      'React', 'JavaScript', 'Angular', 'TypeScript', 'CSS', 'Redux'
    ],
    backend: [
      'PHP', 'Express', 'Node.js', 'MySQL', 'MongoDB', 'JAVA'
    ],
    tools: [
      'Git', 'GitHub', 'VS Code', 'Copilot', 'Figma', 'Docker', 'Webpack', 'Photoshop'
    ]
  };

  return (
    <section id="tech" className={styles.techSection}>
      {/* Grid Background */}
      <div className="gridBackground">
        <div className="gridPattern" />
      </div>
      
      <div className={styles.container}>
        <h2 className={`${styles.title} fadeIn`}>Technical Skills</h2>
        
        <div className={styles.content}>
          <div className={`${styles.techCategory} fadeInLeft`} style={{ animationDelay: '100ms' }}>
            <h3 className={styles.categoryTitle}>Frontend</h3>
            <div className={styles.techGrid}>
              {technologies.frontend.map((tech, index) => (
                <div 
                  key={index} 
                  className={`${styles.techIconItem} fadeIn`} 
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                  title={tech}
                >
                  <img 
                    src={techIcons[tech]} 
                    alt={tech} 
                    className={styles.techIcon} 
                  />
                  <span className={styles.techIconLabel}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.techCategory} fadeIn`} style={{ animationDelay: '300ms' }}>
            <h3 className={styles.categoryTitle}>Backend</h3>
            <div className={styles.techGrid}>
              {technologies.backend.map((tech, index) => (
                <div 
                  key={index} 
                  className={`${styles.techIconItem} fadeIn`} 
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                  title={tech}
                >
                  <img 
                    src={techIcons[tech]} 
                    alt={tech} 
                    className={styles.techIcon} 
                  />
                  <span className={styles.techIconLabel}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.techCategory} fadeInRight`} style={{ animationDelay: '500ms' }}>
            <h3 className={styles.categoryTitle}>Tools & Others</h3>
            <div className={styles.techGrid}>
              {technologies.tools.map((tech, index) => (
                <div 
                  key={index} 
                  className={`${styles.techIconItem} fadeIn`} 
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                  title={tech}
                >
                  <img 
                    src={techIcons[tech]} 
                    alt={tech} 
                    className={styles.techIcon} 
                  />
                  <span className={styles.techIconLabel}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
