import styles from './layout.module.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  let location = useLocation();

  return (
    <>
      <div className={styles.app}>
        <header className={styles.header}>
          <Link to="/" className={styles.title}>
            <h2>Ban's Projects</h2>
          </Link>
          {location.pathname !== '/' && (
            <Link to="/">
              <div className={styles.goBack}>
                <i className="bi bi-arrow-left"></i>
                Back
              </div>
            </Link>
          )}
        </header>
        <div className={styles.content}>
          <Outlet />
        </div>
        <footer className={styles.footer}>
          <p>&#169; Ban Lee</p>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/vanccielee/">LinkedIn</a>
            <a href="https://github.com/ban-lee">GitHub</a>
          </div>
        </footer>
      </div>
    </>
  );
}
