import styles from './AboutSection.module.css';
import iconImage from '../../../assets/icons/Definitivo.png';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* Grid Background */}
      <div className="gridBackground">
        <div className="gridPattern" />
      </div>
      
      <div className={styles.container}>
        <h2 className={`${styles.title} fadeIn`}>About Me</h2>
        
        <div className={styles.content}>
          <div className={`${styles.imageContainer} fadeInLeft`}>
            <img 
              src={iconImage} 
              alt="Thiago Zambonini Logo" 
              className={styles.image}
            />
            <div className={styles.imageBorder}></div>
          </div>
          
          <div className={styles.text}>
            <p className={`${styles.paragraph} fadeInRight delay-100`}>
              Hi! I'm <span className={styles.highlight}>Thiago Zambonini</span>, a passionate Frontend Developer who loves technology.
              I build engaging web interfaces, explore backend development, and create game mods.
              I enjoy solving problems and improving user experiences.
            </p>
            
            <p className={`${styles.paragraph} fadeInRight delay-200`}>
              I dive into AI and craft my own tools, always pushing my skills forward.
              My personal projects showcase my curiosity and drive to make an impact.
              I'm driven by a desire to learn and experiment with new technologies.
            </p>
            
            <p className={`${styles.paragraph} fadeInRight delay-300`}>
              I thrive on collaboration and continuous learning, celebrating every small win.
              I'm eager for challenges that fuel my passion and help me grow.
            </p>
            
            <div className={styles.stats}>
              <div className={`${styles.statCard} fadeIn delay-100`}>
                <div className={styles.statValue}>3+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              
              <div className={`${styles.statCard} fadeIn delay-200`}>
                <div className={styles.statValue}>15+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              
              <div className={`${styles.statCard} fadeIn delay-300`}>
                <div className={styles.statValue}>50K+</div>
                <div className={styles.statLabel}>Lines of Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
