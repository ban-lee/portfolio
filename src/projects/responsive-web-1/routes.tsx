import { Layout } from './layout';
import { Route } from 'react-router-dom';

export function SimpleBlogRoutes() {
  return (
      <Route path="simple-blog" element={<Layout />}>
        <Route
          index
          element={<h1>Home</h1>}
        />
        <Route path="about" element={<h1>About Me</h1>} />
        <Route path="recent" element={<h1>Recent Posts</h1>} />
      </Route>
    );
}
