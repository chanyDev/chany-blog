import { RECENT_POST_COUNT } from 'constants/index';
import { allPosts, Post } from 'contentlayer/generated';

import PostList from '@components/post/PostList';

const HomePage = ({ posts }: { posts: Post[] }) => {
  return <PostList posts={posts} />;
};

export const getStaticProps = async () => {
  const posts = allPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)),
    )
    .slice(0, RECENT_POST_COUNT);

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
