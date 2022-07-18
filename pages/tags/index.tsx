import PostTag from '@components/post/PostTag';
import { allPosts, Post } from 'contentlayer/generated';

const TagListPage = ({ tags }: { tags: string[] }) => {
  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-500">
      <h2 className="py-6 text-4xl font-extrabold md:text-5xl">Tags</h2>
      <div className="flex flex-wrap gap-1 py-6">
        {tags.map((tag, i) => (
          <PostTag tag={tag} key={`${tag}${i}`} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const tags = [
    ...new Set(
      allPosts.reduce<string[]>((prev, curr: Post) => {
        curr.tags?.forEach((tag) => prev.push(tag));
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
