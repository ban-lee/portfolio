import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          Living the Simple Life
          &#169; 2023
        </div>
        <div>
          A Scrimba course project
        </div>
        <NavLink
          to="/"
          className={`${styles['nav-link']} ${styles.special}`}
        >
          Back to Ban's Portfolio
        </NavLink>
      </div>
    </footer>
  );
}
