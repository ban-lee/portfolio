import styles from './about.module.css';

export function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>About</h2>
      <p className={styles.description}>
        I'm a frontend web developer that loves to build functional tools that allow people to get things done.
        It's fun to experiment with the UI to see what works best.
      </p>
    </div>
  );
}
