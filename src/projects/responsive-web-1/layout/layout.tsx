import styles from './layout.module.css';
import { Footer } from '../footer';
import { Header } from '../header';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
