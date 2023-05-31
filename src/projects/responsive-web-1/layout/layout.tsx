import styles from './layout.module.css';
import { Footer } from '../footer';
import { Header } from '../header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar';

export function Layout() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
