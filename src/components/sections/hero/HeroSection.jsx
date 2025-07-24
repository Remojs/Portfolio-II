import { useState, useEffect } from "react";
import Button from "../../ui/button/Button";
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate random particles
  const particles = Array(20).fill().map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${3 + Math.random() * 2}s`
  }));

  return (
    <section id="inicio" className={styles.heroSection}>
      {/* Animated Grid Background */}
      <div className="gridBackground">
        <div className="gridPattern" />
      </div>

      {/* Floating Particles */}
      <div className={styles.floatingParticles}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroTextContainer}>
          <span className={styles.subtitle}>Hello, World!</span>
          <h1 className={styles.name}>Thiago Zambonini</h1>
          <h2 className={styles.title}>{text}<span className="cursor">|</span></h2>
          <p className={styles.description}>
            Passionate developer building amazing web experiences with the latest technologies.
            Creating fast, responsive, and user-friendly applications.
          </p>
          <div className={styles.buttonContainer}>
            <Button onClick={() => scrollToSection("projects")}>View Projects</Button>
            <Button variant="outline" onClick={() => scrollToSection("contact")}>Contact Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
