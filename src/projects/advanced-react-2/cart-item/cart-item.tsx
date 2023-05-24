import styles from './cart-item.module.css';
import { Photo } from '../picsome-types';
import { PicSomeContext } from '../picsome-context';
import { useContext } from 'react';
import { useIsHovered } from '../useIsHovered';

interface Props {
  photo: Photo;
}

export function CartItem( { photo }: Props) {
  const { removeFromCart } = useContext(PicSomeContext);
  const [isHovered, ref] = useIsHovered();

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
          ref={ref}
          onClick={() => removeFromCart(photo)}
        >
          {isHovered ? <i className="bi bi-trash3-fill"></i> : <i className="bi bi-trash3"></i>}
        </div>
      </div>
  );
}
