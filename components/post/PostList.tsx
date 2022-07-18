import { useState } from 'react';
import { Post } from 'contentlayer/generated';

import PostItem from './PostItem';
import PostSearchBar from './PostSearchBar';
import Pagenation from './Pagenation';
import NotFound from './NotFound';

interface PostListProps {
  posts: Post[];
  initialPosts?: Post[];
  searchVisible?: boolean;
  pagenation?: {
    currentPage: number;
    totalPages: number;
  };
}

const PostList = ({
  posts,
  initialPosts,
  pagenation,
  searchVisible = false,
}: PostListProps) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = posts.filter((post) => {
    const searContent = `${post.title}${post.description}${post.tags?.join(
      '',
    )}`;
    return searContent.toLowerCase().includes(searchValue.toLowerCase());
  });
  const displayPosts =
    initialPosts?.length && !searchValue ? initialPosts : filteredPosts;

  return (
    <>
      <div>
        <h2 className="py-6 text-4xl font-extrabold md:text-5xl">
          {searchVisible ? 'All Posts' : 'Recetns Posts'}
        </h2>
        {searchVisible && <PostSearchBar setSearchValue={setSearchValue} />}
      </div>
      <ul className="divide-y divide-gray-300 dark:divide-gray-500">
        {displayPosts.map((post) => (
          <PostItem post={post} key={post.slug} />
        ))}
      </ul>
      {searchValue && !filteredPosts.length ? <NotFound /> : null}
      {pagenation && !searchValue ? (
        <Pagenation pagenation={pagenation} />
      ) : null}
    </>
  );
};

export default PostList;
