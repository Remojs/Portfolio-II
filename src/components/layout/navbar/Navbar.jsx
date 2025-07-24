import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span>&lt;Thiago/&gt;</span>
          </div>

          <nav className={styles.nav}>
            <a className={styles.navLink} onClick={() => scrollToSection('inicio')}>Home</a>
            <a className={styles.navLink} onClick={() => scrollToSection('about')}>About</a>
            <a className={styles.navLink} onClick={() => scrollToSection('tech')}>Skills</a>
            <a className={styles.navLink} onClick={() => scrollToSection('experience')}>Experience</a>
            <a className={styles.navLink} onClick={() => scrollToSection('projects')}>Projects</a>
            <a className={styles.navLink} onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>

          <button 
            className={styles.mobileMenuButton} 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <button 
          className={styles.closeButton} 
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        
        <nav className={styles.mobileNav}>
          <a className={styles.mobileNavLink} onClick={() => scrollToSection('inicio')}>Home</a>
          <a className={styles.mobileNavLink} onClick={() => scrollToSection('about')}>About</a>
          <a className={styles.mobileNavLink} onClick={() => scrollToSection('tech')}>Skills</a>
          <a className={styles.mobileNavLink} onClick={() => scrollToSection('experience')}>Experience</a>
          <a className={styles.mobileNavLink} onClick={() => scrollToSection('projects')}>Projects</a>
          <a className={styles.mobileNavLink} onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
