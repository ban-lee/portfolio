import styles from './image.module.css';
import { Photo } from '../picsome-types';
import { PicSomeContext } from '../picsome-context';
import { useContext, useState } from 'react';

export interface Props {
  index: number;
  photo: Photo;
}

function getClass(index: number): string {
  if (index % 5 === 0) {
      return styles.big;
  }
  else if (index % 6 === 0) {
      return styles.wide;
  }

  return '';
}

export function Image({ index, photo }: Props) {
  const { favourites, toggleFavorite, cart, addToCart, removeFromCart } = useContext(PicSomeContext);
  const [isHovered, setIsHovered] = useState(false);

  const isFavourite = favourites.some((fav) => photo.id === fav);
  const isInCart = cart.some((cartPhoto) => photo.id === cartPhoto.id);

  function toggleCart() {
    if (isInCart) {
      removeFromCart(photo);
    }
    else {
      addToCart(photo);
    }
  }

  return (
    <div
      className={`${styles.container} ${getClass(index)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(isHovered || isFavourite) && (
        <div
          className={styles.favourite}
          onClick={() => toggleFavorite(photo)}
        >
          {isFavourite ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
        </div>
      )}
      {(isHovered || isInCart) && (
        <div
          className={styles.addToCart}
          onClick={toggleCart}
        >
          {isInCart ? <i className="bi bi-cart-x-fill"></i> : <i className="bi bi-plus-lg"></i>}
        </div>
      )}
      <img
        src={photo.url}
        className={styles.grid}
      />
    </div>
  );
}
