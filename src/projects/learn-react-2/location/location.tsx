import styles from './location.module.css';

interface Props {
  location: string;
  googleMapsUrl: string;
}

export function Location({ location, googleMapsUrl }: Props) {
  return (
    <div className={styles.locationInfo}>
      <i className="bi bi-geo-alt-fill"></i>
      <div className={styles.location}>{location}</div>
      <a
        href={googleMapsUrl}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
    </div>
  );
}
