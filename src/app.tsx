import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BusinessCard } from './components/learn-react/project-1/business-card';
import { Home } from './components/home';
import { Layout } from './components/layout';
import { Quizzical } from './components/learn-react/project-3/quizzical/quizzical';
import { TravelJournal } from './components/learn-react/project-2/travel-journal';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn-react/project-1" element={<BusinessCard />} />
          <Route path="learn-react/project-2" element={<TravelJournal />} />
          <Route path="learn-react/project-3" element={<Quizzical />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
