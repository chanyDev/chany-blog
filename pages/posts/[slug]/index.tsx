import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { allPosts } from 'contentlayer/generated';

import PostMDX from '@components/post/PostMDX';

interface PageProps {
  [key: string]: string | undefined;
  slug: string;
}

const PostDetailPage = ({
  post,
  prevPost,
  nextPost,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <PostMDX post={post} prevPost={prevPost} nextPost={nextPost} />;
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
  const post = allPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)),
    )
    .find((post) => post.slug === slug);
  const postIndex = allPosts.findIndex((post) => post.slug === slug);
  const prevPost = allPosts[postIndex - 1] || null;
  const nextPost = allPosts[postIndex + 1] || null;

  return {
    props: {
      post,
      prevPost,
      nextPost,
    },
  };
};

export default PostDetailPage;
