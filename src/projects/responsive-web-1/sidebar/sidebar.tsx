import profileImg from '@/assets/fake-blog/about-me.jpg';
import styles from './sidebar.module.css';
import { POSTS } from '../data';

export function Sidebar() {
  const recentPosts = POSTS.slice(0, 3);

  return (
    <>
      <div className={`${styles.box} ${styles.profile}`}>
        <h2>About Me</h2>
        <img
          src={profileImg}
          alt="A profile picture of a man smiling in the sun."
          width={'100%'}
        />
        <p>
          I find life better, and I'm happier, when things are nice and simple.
        </p>
      </div>

      <div className={`${styles.box} ${styles['recent-posts']}`}>
        <h2>Recent Posts</h2>

        {recentPosts.map((post) => (
          <div key={post.id} className={styles.post}>
            <img
              src={post.imgSrc}
              alt={post.imgAlt}
              width={'100%'}
            />
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
