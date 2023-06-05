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
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}
