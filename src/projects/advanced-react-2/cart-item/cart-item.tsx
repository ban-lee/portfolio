import styles from './cart-item.module.css';
import { Photo } from '../picsome-types';
import { PicSomeContext } from '../picsome-context';
import { useContext } from 'react';

interface Props {
  photo: Photo;
}

export function CartItem( { photo }: Props) {
  const { removeFromCart } = useContext(PicSomeContext);

  return (
    <div className={styles.cartItem}>
        <img
          src={photo.url}
          width={150}
        />
        <div className={styles.cartItemPrice}>
          {photo.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
        </div>
        <div
          className={styles.trash}
          onClick={() => removeFromCart(photo)}
        >
          <i className="bi bi-trash"></i>
        </div>
      </div>
  );
}
