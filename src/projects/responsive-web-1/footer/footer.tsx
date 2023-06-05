import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <p>Living the Simple Life - A Scrimba course project</p>
          <p>&#169; 2023</p>
        </div>
        <div className={styles['portfolio-link']}>
          <NavLink to="/">
            Back to Portfolio
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
