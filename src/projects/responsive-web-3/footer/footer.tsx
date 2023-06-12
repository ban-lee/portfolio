import logoImg from '@/assets/responsive-web-3/logo.png';
import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Fake marketing site logo" />
      </div>
      <div className={styles.blurb}>
        Two brothers from Chicago that are just trying to pay back their debt by helping others with their SEO, SEM, and
        Content Marketing needs.
      </div>

      <div className={styles.copyright}>
        <p>&#169; 2023 Jake&Elwood</p>
        <p>A Scrimba course project</p>
      </div>

      <div className={styles.social}>
        <a href="#"><i className="bi bi-facebook"></i></a>
        <a href="#"><i className="bi bi-twitter"></i></a>
        <a href="#"><i className="bi bi-instagram"></i></a>
      </div>

      <div className={styles['portfolio-link']}>
        <NavLink to="/">
          Back to Portfolio
        </NavLink>
      </div>
    </footer>
  );
}
