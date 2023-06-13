import { About } from './about';
import { Contact } from './contact';
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
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  );
}
