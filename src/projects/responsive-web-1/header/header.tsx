import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Living the simple life</h1>
          <p>A blog exploring minimalism in life</p>
        </div>
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
            <li>
              <NavLink
                to="/"
                className={`${styles['nav-link']} ${styles.special}`}
              >
                <i className="bi bi-arrow-left"></i> Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
