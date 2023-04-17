import styles from './business-card.module.css';
import { About } from '../about';
import { Footer } from '../footer';
import { Info } from '../info';
import { Interests } from '../interests';

/**
 * Requirements
 * - Info (photo, name, buttons, etc.)
 * - About
 * - Interests
 * - Footer
 */
export function BusinessCard() {
  return (
    <div className={styles.card}>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
