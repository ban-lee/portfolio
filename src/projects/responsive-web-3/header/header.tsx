import logoImg from '@/assets/responsive-web-3/logo.png';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Fake marketing site logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/marketing"
              end
              className={({isActive}) => `${styles['nav-link']}${isActive ? ` ${styles.active}` : ''}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({isActive}) => `${styles['nav-link']}${isActive ? ` ${styles.active}` : ''}`}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({isActive}) => `${styles['nav-link']}${isActive ? ` ${styles.active}` : ''}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* <i className="bi bi-list"></i> */}
      </nav>
    </header>
  );
}
