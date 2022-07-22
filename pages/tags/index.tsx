import { NextSeo } from 'next-seo';

import PostTag from '@components/post/PostTag';
import { allPosts, Post } from 'contentlayer/generated';
import metadata from 'config/metadata';

const TagListPage = ({ tags }: { tags: string[] }) => {
  return (
    <>
      <NextSeo
        title="Tags"
        canonical={`${metadata.url}/tags`}
        openGraph={{
          url: `${metadata.url}/tags`,
          title: `Tags | ${metadata.title}`,
        }}
      />
      <div className="divide-y divide-gray-300 dark:divide-gray-500">
        <h2 className="py-6 text-4xl font-extrabold md:text-5xl">Tags</h2>
        <div className="flex flex-wrap gap-1 py-6">
          {tags.map((tag, i) => (
            <PostTag tag={tag} key={`${tag}${i}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const tags = [
    ...new Set(
      allPosts.reduce<string[]>((prev, curr: Post) => {
        curr.tags?.forEach((tag) => prev.push(tag.toLowerCase()));
        return prev;
      }, []),
    ),
  ];

  return {
    props: {
      tags,
    },
  };
};

export default TagListPage;
