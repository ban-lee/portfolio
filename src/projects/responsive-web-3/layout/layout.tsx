import styles from './layout.module.css';
import { Footer } from '../footer';
import { Header } from '../header';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export function Layout({ title }: { title: string }) {

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
