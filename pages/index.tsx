import { RECENT_POST_COUNT } from 'constants/index';
import { allPosts, Post } from 'contentlayer/generated';

import PostList from '@components/post/PostList';

interface HomePageProps {
  posts: Post[];
  initialPosts: Post[];
}

const HomePage = ({ posts, initialPosts }: HomePageProps) => {
  return (
    <PostList posts={posts} initialPosts={initialPosts} title="Recent Posts" />
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) =>
      Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)),
  );

  const initialPosts = posts.slice(0, RECENT_POST_COUNT);

  return {
    props: {
      posts,
      initialPosts,
    },
  };
};

export default HomePage;
