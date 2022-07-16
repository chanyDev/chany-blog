import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { allPosts } from 'contentlayer/generated';

import PostMDX from '@components/post/PostMDX';

interface PageProps {
  [key: string]: string | undefined;
  slug: string;
}

const PostDetailPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <PostMDX post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as PageProps;
  const post = allPosts.find((post) => post.slug === slug);

  return {
    props: {
      post,
    },
  };
};

export default PostDetailPage;
