import logoImg from '@/assets/responsive-web-3/logo.png';
import styles from './header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const isHome = location.pathname.split('/').filter((p) => !!p).length === 1;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.header} ${isHome ? styles.home : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src={logoImg}
            alt="Fake marketing site logo"
          />
        </div>
        <button
          className={`${styles.navBtn} ${styles.navOpenBtn}`}
          aria-label="Open navigation"
          onClick={() => setIsOpen(true)}
        >
          <i className="bi bi-list"></i>
        </button>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <button
            className={`${styles.navBtn} ${styles.navCloseBtn}`}
            aria-label="Close navigation"
            onClick={() => setIsOpen(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/marketing"
                end
                className={({isActive}) => `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({isActive}) => `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({isActive}) => `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
