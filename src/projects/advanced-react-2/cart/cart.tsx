import styles from './cart.module.css';
import { CartItem } from '../cart-item';
import { Form, Link, useActionData, useNavigation } from 'react-router-dom';
import { PicSomeContext } from '../picsome-context';
import { useContext, useEffect, useState } from 'react';

export async function action() {
  await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

  return true;
}

enum OrderState {
  Unknown,
  Empty,
  Ready,
  Complete,
}

export function Cart() {
  const [orderState, setOrderState] = useState(OrderState.Unknown);
  const { cart, clearCart } = useContext(PicSomeContext);
  const total = cart.reduce((prev, curr) => prev + curr.price, 0);

  const navigation = useNavigation();
  const isLoading = navigation.state !== 'idle';
  const isComplete = useActionData() as (boolean|undefined);

  useEffect(() => {
    if (isComplete) {
      setOrderState(OrderState.Complete);
      clearCart();
    } else {
      setOrderState(!!cart.length ? OrderState.Ready : OrderState.Empty);
    }
  }, [cart, isComplete]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Check out</h1>

      {orderState === OrderState.Empty && (
        <div className={styles.message}>
          <h3>Your have no items in your cart.</h3>
          <Link to="/picsome">Back to home</Link>
        </div>
      )}
      {orderState === OrderState.Ready && (
        <Form method="POST">
          <div className={styles.cartItems}>
            {cart.map((cartItem) => <CartItem key={cartItem.id} photo={cartItem} />)}
          </div>
          <div className={styles.total}>
            <strong>Total:</strong> {total.toLocaleString("en-US", {style: "currency", currency: "USD"})}
          </div>
          <div>
            <button
              className={styles.orderButton}
              disabled={isLoading}
            >
              {isLoading ? 'Ordering...' : 'Place Order'}
            </button>
          </div>
        </Form>
      )}
      {orderState === OrderState.Complete && (
        <div className={styles.message}>
          <h3>Order Placed!</h3>
          <Link to="/picsome">Back to home</Link>
        </div>
      )}
    </main>
  );
}
