import { GetStaticPaths, GetStaticProps } from 'next';
import { allPosts, Post } from 'contentlayer/generated';

import PostList from '@components/post/PostList';
import { POST_PER_PAGE } from '@constants/index';

interface PostPageParams {
  [key: string]: string | undefined;
  page: string;
}

interface PostPageProps {
  posts: Post[];
  initialPosts: Post[];
  pagenation: {
    currentPage: number;
    totalPages: number;
  };
}

const PostPage = ({ posts, initialPosts, pagenation }: PostPageProps) => {
  return (
    <PostList
      posts={posts}
      initialPosts={initialPosts}
      title="All Posts"
      pagenation={pagenation}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPage = Math.ceil(allPosts.length / POST_PER_PAGE);
  const paths = Array.from({ length: totalPage }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params as PostPageParams;
  const currentPage = parseInt(page);
  const posts = allPosts.sort(
    (a, b) =>
      Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)),
  );

  const initialPosts = posts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage,
  );

  return {
    props: {
      posts,
      initialPosts,
      pagenation: {
        currentPage: page,
        totalPages: Math.ceil(allPosts.length / POST_PER_PAGE),
      },
    },
  };
};

export default PostPage;
