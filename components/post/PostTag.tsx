import Link from 'next/link';

interface PostTagProps {
  tag: string;
}

const PostTag = ({ tag }: PostTagProps) => {
  return (
    <Link href={`/tags/${tag}`}>
      <a className="mt-1 mr-3 text-sm font-medium uppercase md:text-base text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400">
        {tag}
      </a>
    </Link>
  );
};

export default PostTag;
