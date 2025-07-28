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
              Hi! I'm <span className={styles.highlight}>Thiago Zambonini</span>, a frontend developer with a passion for technology. I enjoy creating attractive web interfaces, developing backend systems, and creating mods for video games. I like solving problems and improving the user experience.
            </p>
            
            <p className={`${styles.paragraph} fadeInRight delay-200`}>
              I am passionate about artificial intelligence and create my own tools, always improving my skills. My personal projects reflect my curiosity and desire to make an impact. I am motivated by the desire to learn and experiment with new technologies.
            </p>
            
            <p className={`${styles.paragraph} fadeInRight delay-300`}>
              I enjoy collaborating and continuously learning, pushing my abilities to the limit. I am eager to take on challenges that fuel my passion, allow me to grow, and leave a mark on the world.
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
