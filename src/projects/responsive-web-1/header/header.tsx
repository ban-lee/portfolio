import styles from './header.module.css';
import { Logo } from '../logo';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                to="/simple-blog"
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
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="recent"
                className={({isActive}) => `${styles['nav-link']}${isActive ? ` ${styles.active}` : ''}`}
              >
                Recent Posts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
