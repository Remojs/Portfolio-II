import styles from './Index.module.css';
import Navbar from "../../components/layout/navbar/Navbar";
import HeroSection from "../../components/sections/hero/HeroSection";
import AboutSection from "../../components/sections/about/AboutSection";
import TechSection from "../../components/sections/tech/TechSection";
import WorkExperienceSection from "../../components/sections/work/WorkExperienceSection";
import ProjectsSection from "../../components/sections/projects/ProjectsSection";
import ContactSection from "../../components/sections/contact/ContactSection";
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className={styles.indexPage}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className={styles.footer}>
        {/* Grid Background */}
        <div className="gridBackground">
          <div className="gridPattern" />
        </div>
        
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © 2025 Thiago Zambonini. Coded with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
