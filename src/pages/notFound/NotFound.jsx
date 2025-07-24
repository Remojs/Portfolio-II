import { Link } from 'react-router-dom';
import Button from '../../components/ui/button/Button';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.message}>
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      <div className={styles.buttonContainer}>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
        <Link to="/linktree">
          <Button variant="outline">View Links</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
