import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import PostList from '@components/post/PostList';
import metadata from 'config/metadata';

interface TagPageParmas {
  [key: string]: string | undefined;
  tag: string;
}

interface TagPageProps {
  posts: Post[];
  initialPosts: Post[];
  tag: string;
}

const TagPage = ({ posts, initialPosts, tag }: TagPageProps) => {
  return (
    <>
      <NextSeo
        title={tag}
        canonical={`${metadata.url}/tags/${tag}`}
        openGraph={{
          url: `${metadata.url}/tags/${tag}`,
          title: `${tag} | ${metadata.title}`,
        }}
      />
      <PostList posts={posts} initialPosts={initialPosts} title={tag} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = [
    ...new Set(
      allPosts.reduce<string[]>((prev, curr: Post) => {
        curr.tags?.forEach((tag) => prev.push(tag.toLowerCase()));
        return prev;
      }, []),
    ),
  ];

  const paths = allTags.map((tag) => {
    return { params: { tag } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as TagPageParmas;
  const posts = allPosts.sort(
    (a, b) =>
      Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)),
  );
  const initialPosts = posts.filter((post) => {
    return post.tags?.find((el) => el.toLowerCase() === tag) && post;
  });

  return {
    props: {
      posts,
      initialPosts,
      tag,
    },
  };
};

export default TagPage;
