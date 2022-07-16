import PostItem from '@components/post/PostItem';
import { RECENT_POST_COUNT } from 'constants/index';

import { allPosts, Post } from 'contentlayer/generated';

const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <h2 className="py-6 text-3xl font-extrabold md:text-4xl">Recent Post</h2>
      <ul className="divide-y">
        {posts.map((post) => (
          <PostItem post={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
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
