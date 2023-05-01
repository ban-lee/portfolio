import styles from './projects.module.css';
import { Course } from '@/types/project';
import { NavLink } from 'react-router-dom';

interface Props {
  courses: Course[];
}

export function Projects({ courses }: Props) {
  return (
    <div className={styles.container}>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <div className={styles.header}>
              <h3 className={styles.courseName}>{course.name}</h3>

              {!!course.githubUrl && (
                <a href={course.githubUrl} className={styles.github}>
                  <i className="bi bi-github"></i>
                </a>
              )}
            </div>
            <div className={styles.description}>
              {course.description}
            </div>
            {!!course.inProgress && (
              <div className={styles.tags}>
                <div>WIP</div>
              </div>
            )}
            <div className={styles.projects}>
              {course.projects.map((project) => {
                return (
                  <div key={project.id} className={styles.links}>
                    {!!project.path && (
                      <NavLink key={project.id} to={project.path}>
                        {project.name}
                      </NavLink>
                    )}
                    {!!project.url && (
                      <a href={project.url}>{project.name}</a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
