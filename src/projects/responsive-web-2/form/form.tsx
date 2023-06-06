import styles from './form.module.css';

export function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.name}>
        <input aria-label="First Name" type="text" placeholder="First Name" />
      </div>
      <div className={styles.email}>
        <input aria-label="Email" type="text" placeholder="Email" />
      </div>

      <button className={styles.registerBtn}>Register</button>

      <p className={styles['fine-print']}>
        We'll never share your information without your permission
      </p>
    </form>
  );
}
