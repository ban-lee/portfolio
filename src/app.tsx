import { BusinessCard } from './projects/learn-react-1/business-card';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home } from './components/home';
import { Home as BbqHome } from './projects/responsive-web-2/home';
import { Layout } from './components/layout';
import { PicSomeRoutes } from './projects/advanced-react-2/routes';
import { Quizzical } from './projects/learn-react-3/quizzical/quizzical';
import { SimpleBlogRoutes } from './projects/responsive-web-1/routes';
import { TravelJournal } from './projects/learn-react-2/travel-journal';
import { TypingGame } from './projects/advanced-react-1/typing-game';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="learn-react-1" element={<BusinessCard />} />
      <Route path="learn-react-2" element={<TravelJournal />} />
      <Route path="learn-react-3" element={<Quizzical />} />
      <Route path="advanced-react-1" element={<TypingGame />} />
      {PicSomeRoutes()}
    </Route>
    {SimpleBlogRoutes()}
    <Route path="/bbq" element={<BbqHome title="BBQ Ribs - Ban's Projects" />} />
  </Route>
));

export function App() {
  return (
    <RouterProvider router={router} />
  );
}
