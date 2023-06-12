import styles from './home.module.css';
import { Info } from '../info';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            The only marketing agency on <span className={styles.accent}>a mission</span>, fully dedicated to increase
            your web traffic.
          </h1>
          <p className={styles.subtitle}>
            We’re two brothers from Chicago that are trying to pay back our debt. We can help you with <strong>SEO, SEM,
            content marketing</strong> and whatever else.
          </p>

          <div className={styles.contact}>
            <NavLink
              to="contact"
              className={styles.contactBtn}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <Info
          title="About us"
          paragraph={
            <>
             We grew up in downtown Chicago, and we used to play in a band. <strong>Jake loves fried chicken</strong>,
             and <strong>Elwood loves dry white toast</strong>.
            </>
          }
          align="center"
        />
        <Info
          title="Our skills"
          paragraph={
            <>
              Elwood is an expert in <strong>SEO, SEM, and driving from the police</strong>. Jake is our <strong>social
              media specialist</strong>, and he has an amazing voice.
            </>
          }
          align="center"
        />
        <Info
          title="Get in touch"
          paragraph={
            <>
              Send us an email with some info about what help you need and
              <strong>we’ll drive over to your place</strong> in our Bluesmobile the following day to discuss the deal.
            </>
          }
          align="center"
        />
      </section>
    </>
  );
}
