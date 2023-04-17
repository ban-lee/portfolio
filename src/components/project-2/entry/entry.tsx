import styles from './entry.module.css';
import { Data } from '../data';
import { Location } from '../location';

interface Props {
  entry: Data;
}

export function Entry({ entry }: Props) {
  return (
    <div className={styles.entry}>
      <img
        src={entry.imageUrl}
        alt={`Photo for ${entry.title}`}
        className={styles.photo}
      />
      <div className={styles.info}>
        <Location
          location={entry.location}
          googleMapsUrl={entry.googleMapsUrl}
        />

        <h3 className={styles.title}>{entry.title}</h3>

        <div className={styles.dates}>
          {entry.startDate} - {entry.endDate}
        </div>

        <div className={styles.description}>{entry.description}</div>
      </div>
    </div>
  );
}
