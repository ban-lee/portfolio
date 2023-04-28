import gitHubLogo from '@/assets/project-1/social-github.svg';
import linkedInLogo from '@/assets/project-1/social-linkedin.svg';
import profilePicture from '@/assets/project-1/profile2.png';
import styles from './info.module.css';

export function Info() {
  return (
    <div>
      <img
        src={profilePicture}
        alt="Ban's profile picture"
        width={320}
        height={320}
      />
      <div className={styles.info}>
        <h1 className={styles.name}>Ban Lee</h1>
        <div className={styles.profession}>Frontend Developer</div>

        <a
          href="https://ak.karlantools.ca"
          className={styles.website}
        >
            ak.karlantools.ca
        </a>

        <div className={styles.socialButtons}>
          <a href="https://github.com/ban-lee" target="_blank" rel="noopener noreferrer">
            <button className={styles.githubButton}>
              <img src={gitHubLogo} alt="GitHub Logo" />
              GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/vanccielee/" target="_blank" rel="noopener noreferrer">
            <button className={styles.linkedInButton}>
              <img src={linkedInLogo} alt="LinkedIn Logo" />
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
