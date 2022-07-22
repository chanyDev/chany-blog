import { ArrowIcon } from '@components/icons';
import { Post } from 'contentlayer/generated';
import Link from 'next/link';

import PostTag from './PostTag';

const PostItem = ({ post }: { post: Post }) => {
  return (
    <li key={post.slug} className="flex flex-col gap-2.5 py-10">
      <article className="md:grid md:grid-cols-4">
        <div className="col-span-1">
          <time
            className="font-medium text-gray-500 dark:text-gray-400"
            dateTime={post.publishedDate}
          >
            {post.publishedDate}
          </time>
        </div>
        <div className="col-span-3">
          <h3 className="text-2xl font-semibold md:text-3xl">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h3>
          <div className="flex flex-wrap gap-1">
            {post.tags?.map((tag, i) => (
              <PostTag tag={tag} key={`${tag}${i}`} />
            ))}
          </div>
          <div className="mt-6 text-gray-500 dark:text-gray-400">
            {post.description}
          </div>
          <div className="mt-6">
            <Link href={`/posts/${post.slug}`}>
              <a className="flex items-center group">
                <span className="mr-6 font-medium">Read More</span>
                <button
                  className="p-2 transition border-2 border-gray-200 group-hover:border-black dark:border-gray-600 dark:group-hover:border-white rounded-3xl"
                  aria-label="Read More"
                >
                  <ArrowIcon className="text-black dark:text-white w-4 h-4 transition fill-current group-hover:translate-x-0.5" />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};

export default PostItem;
