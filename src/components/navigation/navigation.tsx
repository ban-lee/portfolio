import styles from './navigation.module.css';

export enum Project {
  NONE,
  PROJECT1,
  PROJECT2,
}

interface ProjectItemProps {
  setProject: () => void;
  projectNum: number;
  projectName: string;
}

function ProjectItem({ projectNum, projectName, setProject }: ProjectItemProps) {
  return (
    <div>
      <h4 className={styles.projectHeader}>{`Project ${projectNum}`}</h4>
      <button onClick={() => setProject()}>
        {projectName}
      </button>
    </div>
  );
}

interface NavigationProps {
  setProject: React.Dispatch<React.SetStateAction<Project>>;
}

export function Navigation({ setProject }: NavigationProps) {
  return (
    <nav className={styles.nav}>
      <button onClick={() => setProject(Project.NONE)}>
        Home
      </button>

      <div className={styles.course}>
        <h3 className={styles.courseHeader}>Learn React</h3>

        <div className={styles.projects}>
          <ProjectItem
            projectNum={1}
            projectName={`Digital Business Card`}
            setProject={() => setProject(Project.PROJECT1)}
          />

          <ProjectItem
            projectNum={2}
            projectName={`Travel Journal`}
            setProject={() => setProject(Project.PROJECT2)}
          />
        </div>
      </div>
    </nav>
  );
}
