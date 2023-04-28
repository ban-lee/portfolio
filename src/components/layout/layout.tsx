import styles from './layout.module.css';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <div className={styles.app}>
        <header className={styles.header}>
          <Link to="/"><h2>Ban's Projects</h2></Link>
        </header>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
