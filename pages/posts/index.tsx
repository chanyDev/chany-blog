import { allPosts, Post } from 'contentlayer/generated';

import PostList from '@components/post/PostList';
import { POST_PER_PAGE } from '@constants/index';

interface PostListPageProps {
  posts: Post[];
  initialPosts: Post[];
  pagenation: {
    currentPage: number;
    totalPages: number;
  };
}

const PostListPage = ({
  posts,
  initialPosts,
  pagenation,
}: PostListPageProps) => {
  return (
    <PostList
      posts={posts}
      initialPosts={initialPosts}
      title="All Posts"
      pagenation={pagenation}
    />
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) =>
      Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)),
  );
  const initialPosts = posts.slice(0, POST_PER_PAGE);
  const currentPage = 1;
  const totalPages = Math.ceil(posts.length / POST_PER_PAGE);

  return {
    props: {
      posts,
      initialPosts,
      pagenation: {
        currentPage,
        totalPages,
      },
    },
  };
};

export default PostListPage;
