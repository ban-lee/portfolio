import styles from './home.module.css';
import { POSTS } from '../data';
import { PostSummary } from '../post-summary';
import { useEffect } from 'react';

export function Home({ title }: { title: string }) {
  const featuredPost = POSTS[3];
  const recentPosts = POSTS.slice(0, 3);

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <div className={styles['pinned-post']}>
        <PostSummary post={featuredPost} isFeatured={true} />
      </div>

      <div className={styles['post-summaries']}>
        {recentPosts.map((post) => <PostSummary key={post.id} post={post} />)}
      </div>
    </>
  );
}
