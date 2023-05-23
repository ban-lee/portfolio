import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BusinessCard } from './projects/learn-react-1/business-card';
import { Home } from './components/home';
import { Layout } from './components/layout';
import { Quizzical } from './projects/learn-react-3/quizzical/quizzical';
import { TravelJournal } from './projects/learn-react-2/travel-journal';
import { TypingGame } from './projects/advanced-react-1/typing-game';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn-react-1" element={<BusinessCard />} />
          <Route path="learn-react-2" element={<TravelJournal />} />
          <Route path="learn-react-3" element={<Quizzical />} />
          <Route path="advanced-react-1" element={<TypingGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
