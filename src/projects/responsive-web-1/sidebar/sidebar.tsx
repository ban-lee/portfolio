import profileImg from '@/assets/fake-blog/about-me.jpg';
import styles from './sidebar.module.css';
import { POSTS } from '../data';
import { useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  const recentPosts = POSTS.slice(0, 3);
  const isAboutPage = location.pathname.endsWith('/about');

  return (
    <>
      {!isAboutPage && (
        <div className={`${styles.widget} ${styles.profile}`}>
          <h2>About Me</h2>
          <img
            src={profileImg}
            alt="A profile picture of a man smiling in the sun."
            className={styles['profile-image']}
          />
          <p className={styles['profile-body']}>
            I find life better, and I'm happier, when things are nice and simple.
          </p>
        </div>
      )}

      <div className={`${styles.widget} ${styles['recent-posts']}`}>
        <h2>Recent Posts</h2>

        {recentPosts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles['post-title']}>{post.title}</h3>
            <img
              src={post.imgSrc}
              alt={post.imgAlt}
              className={styles['post-image']}
            />
          </div>
        ))}
      </div>
    </>
  );
}
