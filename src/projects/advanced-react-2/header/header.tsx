import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { PicSomeContext } from '../picsome-context';
import { useContext } from 'react';

export function Header() {
  const { cart } = useContext(PicSomeContext);
  const isCartEmpty = cart.length === 0;

  return (
    <header className={styles.header}>
      <Link to="/picsome" className={styles.title}>
        <h2>Pic Some</h2>
      </Link>
      <Link to="cart" className={styles.cart}>
        {isCartEmpty ? <i className="bi bi-cart"></i> : <i className="bi bi-cart-fill"></i> }
      </Link>
    </header>
  );
}
