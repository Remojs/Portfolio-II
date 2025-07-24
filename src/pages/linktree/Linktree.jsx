import { Link } from 'react-router-dom';
import styles from './Linktree.module.css';

const Linktree = () => {
  const links = [
    { title: 'Portfolio Website', url: '/' },
    { title: 'GitHub', url: 'https://github.com/remojs' },
    { title: 'LinkedIn', url: 'https://linkedin.com/in/remojs' },
    { title: 'Twitter', url: 'https://twitter.com/remojs' },
    { title: 'Instagram', url: 'https://instagram.com/remojs' }
  ];

  return (
    <div className={styles.linktreeContainer}>
      <div className={styles.profileContainer}>
        <img 
          src="/profile.jpg" 
          alt="Thiago Zambonini" 
          className={styles.profileImage}
        />
        <h1 className={styles.profileName}>Thiago Zambonini</h1>
        <p className={styles.profileBio}>Frontend Developer | React Specialist | UI/UX Enthusiast</p>
      </div>

      <div className={styles.linksContainer}>
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target={link.url !== '/' ? '_blank' : undefined}
            rel={link.url !== '/' ? 'noopener noreferrer' : undefined}
            className={styles.linkItem}
          >
            {link.title}
          </a>
        ))}
      </div>

      <Link to="/" className={styles.backLink}>
        Back to Portfolio
      </Link>

      <footer className={styles.footer}>
        © 2024 Thiago Zambonini. All rights reserved.
      </footer>
    </div>
  );
};

export default Linktree;
