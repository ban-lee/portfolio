import styles from './post-summary.module.css';
import { Post } from '../types';

interface Props {
  post: Post;
  isFeatured?: boolean;
}

export function PostSummary({ post, isFeatured }: Props) {
  return (
    <article className={`${styles.post} ${isFeatured ? styles.featured : styles.recent}`}>
      <div className={styles.main}>
        <h3 className={styles.title}>{post.title}</h3>
        <div className={styles.summary}>{post.summary}</div>
        <div className={styles.links}>
          <a href="#">Continue reading</a>
        </div>
      </div>
      <div className={styles.secondary}>
        <img
          src={post.imgSrc}
          alt={post.imgAlt}
          className={styles.image}
          style={{ objectPosition: post.imgPosition ? post.imgPosition : 'center' }}
        />
        <div className={styles.metadata}>
          <div>{post.date.toLocaleDateString()}</div>
          <div>{post.numComments} comments</div>
        </div>
      </div>
    </article>
  );
}
