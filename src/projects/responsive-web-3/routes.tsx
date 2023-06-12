import { Home } from './home';
import { Layout } from './layout';
import { Route } from 'react-router-dom';

export function MarketingRoutes() {
  return (
    <Route
      path="marketing"
      element={<Layout title="Jake&Elwood - Ban's Project" />}
    >
      <Route index element={<Home />} />
        <Route path="about" element={<h1>About Us</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
    </Route>
  );
}
