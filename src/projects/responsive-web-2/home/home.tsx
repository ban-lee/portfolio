import styles from './home.module.css';
import { Form } from '../form';
import { InfoBar } from '../infobar';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export function Home({ title }: { title: string }) {

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className={styles.container}>
      <InfoBar />
      <main className={styles.main}>
        <h2>Become a BBQ master!</h2>
        <p className={styles.subtitle}>Register Today</p>
        <p className={styles.description}>
          BBQ isn't just standing in front of your grill with it on full blast and hoping for the best. It's an art! One
          way to speed up the process is to learn from the best. You can do just that by signing up for this free
          webinar!
        </p>
        <Form />
        <footer className={styles.footer}>
          <div className={styles.copyright}>
            <p>A Scrimba course project</p>
            <p>&#169; 2023</p>
          </div>
          <div className={styles['portfolio-link']}>
            <NavLink to="/">
              Back to Portfolio
            </NavLink>
          </div>
        </footer>
      </main>
    </div>
  );
}
