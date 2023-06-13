import contactImg from '@/assets/responsive-web-3/contact.jpg';
import styles from './contact.module.css';
import { Info } from '../info';

export function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Contact.</h1>
      <p className={styles.subtitle}>
        Let us know how we can help you need and we’ll drive over to your place in our Bluesmobile the following day to
        discuss the deal.
      </p>
      <div className={styles.content}>
        <form className={styles.form}>
          <div className={styles.name}>
            <label htmlFor="name">First Name</label>
            <input id="name" name="name" type="text" />
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" />
          </div>
          <div className={styles.message}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>

          <button
            className={styles.sendBtn}
          >
            Send
          </button>
        </form>
      </div>
      <div className={styles.sideContent}>
        <Info
          title="Getting in touch with us"
          align="left"
        >
          <p>
            You can either use the form or <a href="#">send us an email</a>. I'll get back in touch with you as soon as
            possible!
          </p>
        </Info>
        <img
          src={contactImg}
          alt="A bunch of mailboxes of different shapes and style in a row."
          className={styles.contactImg}
        />
      </div>
    </main>
  );
}
