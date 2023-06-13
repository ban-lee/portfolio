import aboutImg from '@/assets/responsive-web-3/about-me.jpg';
import styles from './about.module.css';
import { Info } from '../info';

export function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>About us.</h1>
      <p className={styles.subtitle}>
        We’re two brothers from Chicago. We can help you with SEO, SEM, content marketing and whatever else.
      </p>
      <div className={styles.content}>
        <Info
          title="We're really great guys"
          align="left"
        >
          <p>
            We grew up in downtown Chicago, and we used to play in a band. Jake loves fried chicken, and Elwood loves
            dry white toast.
          </p>
          <p>
            While the band didn't make it, the hard work we put in trying to promote it sure did. Like a lot of people,
            we needed a website, and we needed to rank. The "experts" didn't seem to know what they were talking about,
            so we figured it out on our own.
          </p>
        </Info>
        <Info
          title="We can do all sorts of great stuff"
          align="left"
        >
          <p>
            Honestly most people in this industry seem to be full of crap. We don't care what you've heard, or what
            others have told you, we get results and at the end of the day, what else matters?
          </p>
          <p>
            So sure, maybe we're a bit different from what you'd expect, but if you want to rank, market, and build your
            way to the top, we're the brothers for you.
          </p>
        </Info>
      </div>
      <img
        src={aboutImg}
        alt="A person with scuba googles face up in water."
        className={styles.aboutImg}
      />
    </main>
  );
}
