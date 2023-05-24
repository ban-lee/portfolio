import styles from './layout.module.css';
import { Header } from '../header';
import { Outlet } from 'react-router-dom';
import { PicSomeProvider } from '../picsome-context';

export function Layout() {
  return (
    <div className={styles.container}>
      <PicSomeProvider>
        <>
          <Header />
          <Outlet />
        </>
      </PicSomeProvider>
    </div>
  );
}
