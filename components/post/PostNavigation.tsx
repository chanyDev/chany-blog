import { Post } from 'contentlayer/generated';
import Link from 'next/link';

import { ArrowIcon } from '@components/icons';
import PostTag from './PostTag';

interface PostNavigationProps {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
}

const PostNavigation = ({ post, prevPost, nextPost }: PostNavigationProps) => {
  return (
    <div>
      <div className="pt-6">
        {post.tags && (
          <>
            <div className="mb-1 text-gray-500 dark:text-gray-400">Tags</div>
            {post.tags.map((tag, i) => (
              <PostTag tag={tag} key={`${tag}${i}`} />
            ))}
          </>
        )}
      </div>
      <div className="flex justify-between py-6 ">
        <div>
          <div className="mb-1 text-gray-500 dark:text-gray-400">
            Previous Post
          </div>
          {prevPost && (
            <div className="flex items-center text-sm font-medium md:text-base text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400">
              <ArrowIcon className="w-3 h-3 mr-2 rotate-180 fill-current" />
              <Link href={`/posts/${prevPost.slug}`}>{prevPost.title}</Link>
            </div>
          )}
        </div>
        <div>
          <div className="mb-1 text-gray-500 dark:text-gray-400">Next Post</div>
          {nextPost && (
            <div className="flex items-center text-sm font-medium md:text-base text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400">
              <Link href={`/posts/${nextPost.slug}`}>{nextPost.title}</Link>
              <ArrowIcon className="w-3 h-3 ml-2 fill-current" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostNavigation;