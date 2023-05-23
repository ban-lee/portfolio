import styles from './travel-journal.module.css';
import { data } from '../data';
import { Entry } from '../entry';
import { Footer } from '../footer';

/**
 * Requirements
 * - Data array in a separate .js/.ts file
 *   - Title, location, Google Maps link, start and end dates, description, photo URL
 * - Use .map() and props
 * - Styled & polished
 */
export function TravelJournal() {
  return (
    <div className={styles.journal}>
      <header className={styles.header}>
        <i className="bi bi-globe-americas"></i>
        <h2>my travel journal.</h2>
      </header>
      <main className={styles.main}>
        {data.map((entry) => {
          return <Entry key={entry.id} entry={entry} />
        })}
      </main>
      <Footer />
    </div>
  );
}
