import { SearchIcon } from '@components/icons';
import { Dispatch, SetStateAction } from 'react';

interface PostSearchBarProps {
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const PostSearchBar = ({ setSearchValue }: PostSearchBarProps) => {
  return (
    <div className="relative flex items-center pb-4">
      <button className="absolute flex translate-x-4" aria-label="Search Posts">
        <SearchIcon className="w-4 h-4 font-light text-gray-300 fill-current dark:text-gray-500 " />
      </button>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Posts"
        className="w-full py-2 pl-10 pr-4 border border-gray-300 outline-none rounded-3xl md:w-3/5 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400 dark:bg-gray-900 dark:border-gray-500"
        type="text"
      />
    </div>
  );
};

export default PostSearchBar;
