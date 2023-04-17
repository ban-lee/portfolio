import locationPinIcon from '/src/assets/project-2/location-dot-solid.svg';
import styles from './location.module.css';

interface Props {
  location: string;
  googleMapsUrl: string;
}

export function Location({ location, googleMapsUrl }: Props) {
  return (
    <div className={styles.locationInfo}>
      <img
        src={locationPinIcon}
        alt="Location pin icon"
      />
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
