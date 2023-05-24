import { Cart } from './cart';
import { Layout } from './layout';
import { loader as photosLoader, Photos } from './photos';
import { Route } from 'react-router-dom';

export function PicSomeRoutes() {
  return (
      <Route path="picsome" element={<Layout />}>
        <Route
          index
          element={<Photos />}
          loader={photosLoader}
        />
        <Route path="cart" element={<Cart />} />
      </Route>
    );
}
