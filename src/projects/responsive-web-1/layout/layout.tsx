import styles from './layout.module.css';
import { Header } from '../header';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
}
