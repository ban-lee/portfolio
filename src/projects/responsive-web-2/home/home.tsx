import styles from './home.module.css';
import { Form } from '../form';
import { useEffect } from 'react';

export function Home({ title }: { title: string }) {

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <h2>Learn how to make the best BBQ ribs in town</h2>
        <p className={styles.info}>Join us for this live webinar</p>
        <p className={styles.tagline}>Mouthwateringly delicious</p>
      </aside>
      <main className={styles.main}>
        <h1>Become a BBQ master!</h1>
        <p className={styles.subtitle}>Register Today</p>
        <p className={styles.description}>
          BBQ isn't just standing in front of your grill with it on full blast and hoping for the best. It's an art! One
          way to speed up the process is to learn from the best. You can do just that by signing up for this free
          webinar!
        </p>
        <Form />
      </main>
    </div>
  );
}
