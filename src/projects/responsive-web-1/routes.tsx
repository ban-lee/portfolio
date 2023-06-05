import { AboutMe } from './about-me';
import { Home } from './home';
import { Layout } from './layout';
import { RecentPosts } from './recent-posts';
import { Route } from 'react-router-dom';

export function SimpleBlogRoutes() {
  return (
      <Route
        path="simple-blog"
        element={<Layout />}
      >
        <Route
          index
          element={<Home title="Fake Blog - Ban's Projects" />}
        />
        <Route path="about" element={<AboutMe />} />
        <Route path="recent" element={<RecentPosts />} />
      </Route>
    );
}
