import styles from './interests.module.css';

export function Interests() {
  return (
    <div className={styles.interests}>
      <h2 className={styles.title}>Interests</h2>
      <ul className={styles.description}>
        <li><div>Cat haver: Frogger & Domino</div></li>
        <li><div>FFXIV Raider</div></li>
        <li><div>Arknights Doctor</div></li>
        <li><div>Coffee enjoyer</div></li>
      </ul>
    </div>
  );
}
