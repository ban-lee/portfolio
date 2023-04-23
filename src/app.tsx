import styles from './app.module.css';
import { BusinessCard } from './components/project-1/business-card';
import { Home } from './components/home';
import { Navigation, Project } from './components/navigation';
import { Quizzical } from './components/project-3/quizzical/quizzical';
import { TravelJournal } from './components/project-2/travel-journal';
import { useState } from 'react';

interface ContentProps {
  project: Project;
}

function Content({ project }: ContentProps) {
  return (
    <div className={styles.content}>
      {project === Project.NONE && <Home />}
      {project === Project.PROJECT1 && <BusinessCard />}
      {project === Project.PROJECT2 && <TravelJournal />}
      {project === Project.PROJECT3 && <Quizzical />}
    </div>
  );
}

export function App() {
  const [project, setProject] = useState(Project.NONE);

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <h1>Portfolio</h1>
        <Navigation setProject={setProject} />
      </div>
      <Content project={project} />
    </div>
  );
}
