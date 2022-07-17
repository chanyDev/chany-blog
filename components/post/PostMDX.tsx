import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';

import PostNavigation from './PostNavigation';

const PostMDX = ({ post }: { post: Post }) => {
  const MDX = useMDXComponent(post.body.code);

  return (
    <article className="divide-y">
      <div className="flex flex-col py-6">
        <h2 className="text-3xl font-extrabold md:text-4xl">{post.title}</h2>
        <time
          dateTime={post.publishedDate}
          className="mt-1 text-gray-500 dark:text-gray-400"
        >
          {post.publishedDate}
        </time>
      </div>
      <div className="w-full divide-y">
        {/* MDX */}
        <div className="py-6 prose max-w-none">
          <MDX />
        </div>
        {/* Navigation */}
        <PostNavigation post={post} />
      </div>
    </article>
  );
};

export default PostMDX;
