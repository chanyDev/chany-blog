import Link from 'next/link';

interface PostTagProps {
  tag: string;
}

const PostTag = ({ tag }: PostTagProps) => {
  return (
    <Link href={`/tags/${tag.toLowerCase()}`}>
      <a className="px-3 py-1 mt-[10px] mr-2 text-sm font-medium lowercase  transition duration-300 bg-gray-100 rounded-full ring-offset-[3px] md:text-base text-cyan-500 hover:ring-2 hover:ring-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400 dark:bg-gray-800 dark:ring-offset-gray-900">
        {tag}
      </a>
    </Link>
  );
};

export default PostTag;
