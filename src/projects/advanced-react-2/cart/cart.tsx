import styles from './cart.module.css';
import { CartItem } from '../cart-item';
import { PicSomeContext } from '../picsome-context';
import { useContext } from 'react';

export function Cart() {
  const { cart } = useContext(PicSomeContext);
  const total = cart.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Check out</h1>

      {cart.length > 0 && (
        <>
          <div className={styles.cartItems}>
            {cart.map((cartItem) => <CartItem key={cartItem.id} photo={cartItem} />)}
          </div>
          <div className={styles.total}>
            <strong>Total:</strong> {total.toLocaleString("en-US", {style: "currency", currency: "USD"})}
          </div>
          <div>
            <button className={styles.orderButton}>Place Order</button>
          </div>
        </>
      )}
    </main>
  );
}
