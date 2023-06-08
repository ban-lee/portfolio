import styles from './infobar.module.css';

export function InfoBar() {
  return (
    <aside className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Learn how to make <strong>the best BBQ ribs</strong> in town
        </h1>
        <p className={styles.subtitle}>
          Join us for this live webinar
        </p>
      </div>
      <p className={styles.tagline}>
        Mouthwateringly delicious
      </p>
    </aside>
  );
}
