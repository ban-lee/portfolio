import { createContext, ReactElement, useState } from 'react';
import { Photo } from './picsome-types';

export interface PicSomeContextType {
  favourites: string[];
  toggleFavorite: (p: Photo) => void;

  cart: Photo[];
  addToCart: (p: Photo) => void;
  removeFromCart: (p: Photo) => void;
}

export const PicSomeContext = createContext<PicSomeContextType>({
  favourites: [],
  toggleFavorite: () => {},

  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function PicSomeProvider({ children } : { children: ReactElement}) {
  const [favourites, setFavourites] = useState<string[]>([]);
  const [cart, setCart] = useState<Photo[]>([]);

  function toggleFavorite(photo: Photo) {
    const isFavourite = favourites.find((fav) => photo.id === fav);

    if (!!isFavourite) {
      // Remove from favourites
      setFavourites((prevFaves) => [...prevFaves.filter((fav) => photo.id !== fav)]);
    } else {
      // Add to favourites
      setFavourites((prevFaves) => [...prevFaves, photo.id]);
    }
  }

  function addToCart(photo: Photo) {
    setCart((prevCart) => [...prevCart, photo]);
  }

  function removeFromCart(photo: Photo) {
    setCart((prevCart) => prevCart.filter((p) => p.id !== photo.id));
  }

  return (
    <PicSomeContext.Provider
      value={{
        favourites,
        toggleFavorite,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </PicSomeContext.Provider>
  );
}
