import { Post } from 'contentlayer/generated';

import PostTag from './PostTag';

const PostNavigation = ({ post }: { post: Post }) => {
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
          <div className="text-gray-500 dark:text-gray-400">Previous Post</div>
        </div>
        <div>
          <div className="text-gray-500 dark:text-gray-400">Next Post</div>
        </div>
      </div>
    </div>
  );
};

export default PostNavigation;
