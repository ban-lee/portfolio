import styles from './home.module.css';
import { PERSONAL, SCRIMBA } from '@/data/projects';
import { Projects } from '../projects';

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <h1>Welcome!</h1>
        <p>
          You can find all my publicly accessible programming projects here.
        </p>
      </div>
      <div className={styles.projects}>
        <div>
          <h2>Scrimba Projects</h2>
          <Projects courses={SCRIMBA} />
        </div>
        <div>
          <h2>Personal Projects</h2>
          <Projects courses={PERSONAL} />
        </div>
      </div>
    </div>
  );
}
