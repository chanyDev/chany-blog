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
          {prevPost && (
            <>
              <div className="mb-1 text-gray-500 dark:text-gray-400">
                Previous Post
              </div>
              <Link href={`/posts/${prevPost.slug}`}>
                <a className="flex items-center text-sm font-medium md:text-base text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400">
                  <ArrowIcon className="w-3 h-3 mr-2 rotate-180 fill-current" />
                  {prevPost.title}
                </a>
              </Link>
            </>
          )}
        </div>
        <div>
          {nextPost && (
            <>
              <div className="mb-1 text-gray-500 dark:text-gray-400">
                Next Post
              </div>
              <Link href={`/posts/${nextPost.slug}`}>
                <a className="flex items-center text-sm font-medium md:text-base text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400">
                  {nextPost.title}
                  <ArrowIcon className="w-3 h-3 ml-2 fill-current" />
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostNavigation;
