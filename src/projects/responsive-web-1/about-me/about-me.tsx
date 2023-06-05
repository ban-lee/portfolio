import profileImg from '@/assets/fake-blog/about-me.jpg';
import styles from './about-me.module.css';

export function AboutMe() {
  return (
    <div className={styles['about-me']}>
      <img
        src={profileImg}
        alt="A profile picture of a man smiling in the sun."
        className={styles.image}
      />

      <h2 className={styles.title}>My name is John and living the simple life saved my life</h2>
      <p className={styles.text}>
        <strong>I used to be a pack rat.</strong> I had so many things that I thought that I loved, but the truth was I
        couldn't even appreciate any of it because there was too much.
      </p>

      <p className={styles.text}>
        Things were terrible. I had a job that I hated, a home that I didn't want to live in, and I couldn't hold a
        relationship.
      </p>

      <h3 className={styles.subtitle}>How I turned things around</h3>

      <p className={styles.text}>
        <strong>I was on the verge of a breakdown when I got rid of everything.</strong> I literally put 90% of my
        possessions in the garbage, sold my place and moved into a smaller apartment, and I quit my job.
      </p>

      <p className={styles.text}>
        It wasn't easy at all, but everything around me was in such a bad place, I didn't know what else to do. And it
        worked.
      </p>

      <h3 className={styles.subtitle}>Now I live the simple life</h3>

      <p className={styles.text}>
        Now that I'm living a simple life, things are so much better. I'm less stressed, enjoy life and work more, and
        I have more free time to enjoy.
      </p>

      <p className={styles.text}>
        With how much it turned my life around, <strong>I felt like I had no choice but to start sharing how I did it
        </strong>, and how others can benefit from living a simple life as well, which is why I started this site!
      </p>
    </div>
  );
}
