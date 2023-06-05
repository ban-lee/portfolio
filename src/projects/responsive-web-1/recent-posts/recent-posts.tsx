import styles from './recent-posts.module.css';
import { POSTS } from '../data';
import { PostSummary } from '../post-summary';

export function RecentPosts() {
  return (
    <div className={styles['post-summaries']}>
      {POSTS.map((post) => <PostSummary key={post.id} post={post} />)}
    </div>
  );
}
