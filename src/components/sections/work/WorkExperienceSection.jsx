import styles from './WorkExperienceSection.module.css';

const WorkExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      position: 'Head of Development',
      company: 'Smart Racoon',
      period: 'Feb 2024 - Jan 2025',
      description: 'Led software development by coordinating multidisciplinary teams and ensuring steady progress across all project areas.',
      technologies: ['React', 'Angular', 'JavaScript', 'TypeScript', 'PHP'],
      side: 'left'
    },
    {
      id: 2,
      position: 'Front‑End Developer',
      company: 'Smart Racoon',
      period: 'Sep 2023 - Jan 2024',
      description: 'Designed and built functional, user‑friendly interfaces that improved UX and attracted new projects.',
      technologies: ['React', 'Angular', 'JavaScript', 'PHP', 'Figma'],
      side: 'right'
    },
    {
      id: 3,
      position: 'Full Stack Web Developer (Freelance)',
      company: 'Freelance',
      period: 'Sep 2022 - Mar 2023',
      description: 'Delivered custom, scalable web solutions focused on problem‑solving and continuous improvement, boosting client reach up to tenfold.',
      technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
      side: 'left'
    }
  ];

  return (
    <section id="experience" className={styles.workExperienceSection}>
      {/* Grid Background */}
      <div className="gridBackground">
        <div className="gridPattern" />
      </div>
      
      <div className={styles.container}>
        <h2 className={`${styles.title} fadeIn`}>Work Experience</h2>
        
        <div className={styles.timeline}>
          <div className={`${styles.timelineCenter} fadeIn`} style={{ animationDelay: '200ms' }}></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div 
                className={`${styles.timelineContent} ${styles[exp.side]} ${exp.side === 'left' ? 'fadeInLeft' : 'fadeInRight'}`}
                style={{ animationDelay: `${index * 300 + 300}ms` }}
              >
                <h3 className={styles.jobTitle}>{exp.position}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <div className={styles.period}>
                  {exp.period}
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.techStack}>
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`${styles.tech} fadeIn`}
                      style={{ animationDelay: `${index * 300 + techIndex * 100 + 600}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div 
                className={`${styles.timelineDot} fadeIn`}
                style={{ animationDelay: `${index * 300 + 300}ms` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
