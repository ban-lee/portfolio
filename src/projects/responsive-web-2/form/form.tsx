import styles from './form.module.css';

export function Form() {
  return (
    <form>
      <div>
        <label htmlFor="name">First Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>

      <button className={styles.registerBtn}>Register</button>

      <p className={styles['fine-print']}>
        We'll never share your information without your permission
      </p>
    </form>
  );
}
