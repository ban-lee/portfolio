import styles from './app.module.css';
import { BusinessCard } from './components/project-1/business-card';
import { Home } from './components/home';
import { Navigation, Project } from './components/navigation';
import { useState } from 'react';

interface ContentProps {
  project: Project;
}

function Content({ project }: ContentProps) {
  return (
    <div className={styles.content}>
      {project === Project.NONE && <Home />}
      {project === Project.PROJECT1 && <BusinessCard />}
    </div>
  );
}

export function App() {
  const [project, setProject] = useState(Project.NONE);

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <h1>Scrimba Projects</h1>
        <Navigation setProject={setProject} />
      </div>
      <Content project={project} />
    </div>
  );
}
